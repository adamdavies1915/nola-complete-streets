import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { parse } from 'parse5';
const root=resolve('dist');const base=(process.env.BASE_PATH||'/').replace(/\/$/,'');
const errors=[];let checked=0;const htmlCache=new Map();
async function files(dir){const out=[];for(const f of await readdir(dir,{withFileTypes:true})){const path=join(dir,f.name);if(f.isDirectory())out.push(...await files(path));else out.push(path);}return out;}
function nodes(node){return [node,...(node.childNodes||[]).flatMap(nodes)];}
function attrs(node){return Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));}
const html=(await files(root)).filter(f=>f.endsWith('.html'));
for(const path of html){const text=await readFile(path,'utf8');htmlCache.set(path,{text,nodes:nodes(parse(text))});}
async function target(pathname){let path=join(root,decodeURIComponent(pathname));try{if((await stat(path)).isDirectory())path=join(path,'index.html');await stat(path);return path;}catch{return null;}}
for(const [file,doc] of htmlCache){
  const rel=file.slice(root.length).replace(/index\.html$/,'');const redirect=doc.text.includes('http-equiv="refresh"');
  const heads=doc.nodes.filter(n=>n.tagName==='h1');if(heads.length!==1)errors.push(`${rel}: expected one h1, found ${heads.length}`);
  if(!redirect){if(!doc.nodes.some(n=>n.tagName==='title'))errors.push(`${rel}: no title`);if(!doc.nodes.some(n=>n.tagName==='meta'&&attrs(n).name==='description'))errors.push(`${rel}: no description`);}
  const ids=doc.nodes.map(n=>attrs(n).id).filter(Boolean);if(new Set(ids).size!==ids.length)errors.push(`${rel}: duplicate IDs`);
  for(const node of doc.nodes){const a=attrs(node);if(node.tagName==='img' && a.alt===undefined)errors.push(`${rel}: image missing alt`);if(node.tagName==='iframe'&&!a.title)errors.push(`${rel}: iframe missing title`);
    for(const key of ['href','src']){const value=a[key];if(!value||/^(https?:|mailto:|tel:|data:|javascript:)/i.test(value)||value.startsWith('//'))continue;
      if(value==='#'){errors.push(`${rel}: empty action`);continue;}
      const u=new URL(value,`https://test.invalid${base}${rel}`);
      if(base && !u.pathname.startsWith(base+'/') && u.pathname!==base){errors.push(`${rel}: URL escapes BASE_PATH: ${value}`);continue;}
      const path=await target(u.pathname.slice(base.length));checked++;
      if(!path){errors.push(`${rel}: missing ${value}`);continue;}
      if(u.hash&&htmlCache.has(path)){const id=decodeURIComponent(u.hash.slice(1));if(!htmlCache.get(path).nodes.some(n=>attrs(n).id===id))errors.push(`${rel}: missing anchor ${value}`);}
    }
  }
}
const home=htmlCache.get(join(root,'index.html'))?.text||'';
if(home.includes('bikestreets.com/widget'))errors.push('Bike map should not load on homepage');
const memberPage=htmlCache.get(join(root,'about/members/index.html'))?.text||'';
for(const file of await readdir('src/content/members')){if(!file.endsWith('.json'))continue;const member=JSON.parse(await readFile(join('src/content/members',file),'utf8'));if(!member.published&&memberPage.includes(member.name))errors.push(`Unapproved roster entry exposed: ${member.name}`);}
// CSS URLs are also part of a successful subpath deployment.
for(const f of (await files(root)).filter(f=>f.endsWith('.css'))){const text=await readFile(f,'utf8');for(const match of text.matchAll(/url\(["']?(\/[^)"']+)/g)){const value=match[1];if(base&&!value.startsWith(base+'/'))errors.push(`CSS URL escapes BASE_PATH: ${value}`);else if(!await target(value.slice(base.length)))errors.push(`Missing CSS asset: ${value}`);}}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`Site checks passed: ${html.length} HTML files, ${checked} local links/assets, metadata, IDs, embeds and draft visibility.`);
