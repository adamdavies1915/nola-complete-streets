import { getCollection } from 'astro:content';
export async function getStaticPaths() {
  return (await getCollection('events', ({data})=>data.published && data.status==='scheduled')).map(event=>({params:{id:event.id},props:{event}}));
}
const escape = (value: string) => value.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
const stamp = (date: string) => new Date(date).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
export function GET({props}: any) {
  const { data:e,id }=props.event;
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//NOCSC//Coalition meetings//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${id}@nolacompletestreets.org`,`DTSTAMP:${stamp('2026-11-20T00:00:00Z')}`,`DTSTART:${stamp(e.start)}`,`DTEND:${stamp(e.end)}`,`SUMMARY:${escape(e.title)}`,`DESCRIPTION:${escape(e.description)}`,`LOCATION:${escape(`${e.location}, ${e.address}`)}`,'STATUS:CONFIRMED','END:VEVENT','END:VCALENDAR'];
  // RFC 5545: fold long UTF-8 lines at 75 octets, including continuation space.
  const fold=(line:string)=>{let out='',current='';for(const ch of line){if(Buffer.byteLength(current+ch)>75){out+=current+'\r\n';current=' ';}current+=ch;}return out+current;};
  return new Response(lines.map(fold).join('\r\n')+'\r\n',{headers:{'Content-Type':'text/calendar; charset=utf-8'}});
}
