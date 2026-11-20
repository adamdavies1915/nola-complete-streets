import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
const dir = new URL('../dist/', import.meta.url);
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const site = process.env.SITE_URL || 'https://nolacompletestreets.org';
const abs = path => new URL(`${base}${path}`, site).href;
const escape = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function walk(folder, prefix='') { const entries=await readdir(folder,{withFileTypes:true});const out=[];for(const entry of entries){const path=join(prefix,entry.name);if(entry.isDirectory())out.push(...await walk(new URL(`${entry.name}/`,folder),path));else out.push(path);}return out; }
const pages=(await walk(dir)).filter(f=>f.endsWith('index.html')).map(f=>`/${f.replace(/index\.html$/,'')}`);
const redirects=JSON.parse(await readFile(new URL('../src/data/redirects.json',import.meta.url),'utf8'));
for(const [from,to] of Object.entries(redirects)) {
  if(pages.includes(from)) throw new Error(`Redirect would replace a real page: ${from}`);
  if(!pages.includes(to)) throw new Error(`Missing redirect target: ${to}`);
  const target=`${base}${to}`;const folder=new URL(`.${from}`,dir);await mkdir(folder,{recursive:true});
  await writeFile(new URL('index.html',folder),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${escape(target)}"><link rel="canonical" href="${escape(abs(to))}"><title>Page moved | NOCSC</title></head><body><main><h1>This page has moved.</h1><p><a href="${escape(target)}">Continue to the new page</a>.</p></main></body></html>`);
}
await writeFile(new URL('sitemap.xml',dir),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.sort().map(path=>`  <url><loc>${escape(abs(path))}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile(new URL('robots.txt',dir),`User-agent: *\nAllow: /\nSitemap: ${abs('/sitemap.xml')}\n`);
await writeFile(new URL('.nojekyll',dir),'');
if(process.env.CUSTOM_DOMAIN){if(!/^[a-z0-9.-]+$/i.test(process.env.CUSTOM_DOMAIN))throw new Error('CUSTOM_DOMAIN must contain only a hostname');await writeFile(new URL('CNAME',dir),`${process.env.CUSTOM_DOMAIN}\n`);}
console.log(`Generated sitemap for ${pages.length} pages and ${Object.keys(redirects).length} legacy redirects.`);
