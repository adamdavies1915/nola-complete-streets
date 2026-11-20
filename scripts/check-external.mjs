import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const urls=new Set();
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await walk(path);else if(/\.(md|json)$/.test(path)){const text=await readFile(path,'utf8');for(const match of text.matchAll(/https:\/\/[^\s"<>\])]+/g))urls.add(match[0]);}}}
await walk('src/content');await walk('src/data');
let failures=0;const results=[];const queue=[...urls];
async function worker(){while(queue.length){const url=queue.shift();try{let r=await fetch(url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(15000)});if([403,405].includes(r.status))r=await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(15000)});const ok=r.status<400;results.push({url,status:r.status,ok});if(!ok)failures++;await r.body?.cancel();}catch(e){failures++;results.push({url,ok:false,error:e.cause?.code||e.message});}}}
await Promise.all(Array.from({length:4},worker));console.log(JSON.stringify(results,null,2));console.log(`${results.length-failures}/${results.length} external URLs reachable. Bot blocks require manual review.`);process.exitCode=failures?1:0;
