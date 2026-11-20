import rawSettings from '../data/settings.json';
import rawHome from '../data/home.json';
import { z } from 'astro:content';

const publicUrl = z.union([z.literal(''), z.string().url().refine(v => v.startsWith('https://'), 'Use an HTTPS URL')]);
export const settings = z.object({
  name: z.string(), shortName: z.string(), description: z.string(),
  email: z.union([z.literal(''), z.string().email()]), newsletterUrl: publicUrl,
  storymapUrl: z.string().url().refine(v => v.startsWith('https://storymaps.arcgis.com/stories/')),
  storymapEmbedEnabled: z.boolean(),
  bikeMapUrl: z.string().url().refine(v => v.startsWith('https://bikestreets.com/')),
  bikeMapEmbedUrl: z.string().url().refine(v => v.startsWith('https://bikestreets.com/widget/')),
  betterStreetsUrl: z.string().url(), certificationChecklistUrl: publicUrl,
  certificationFlyerUrl: publicUrl, certificationContactEmail: z.union([z.literal(''), z.string().email()]),
  meetingSchedule: z.string(), meetingLocation: z.string(), meetingAddress: z.string(),
  meetingNotice: z.string(), meetingNoticeExpires: z.string().datetime({ offset: true }),
}).parse(rawSettings);
export const home = z.object({
  title: z.string(), intro: z.string(), heroImage: z.string().startsWith('/images/'), heroAlt: z.string(),
  definitionTitle: z.string(), definition: z.string(), policyTitle: z.string(), policyIntro: z.string(),
  invitationTitle: z.string(), invitation: z.string(),
}).parse(rawHome);
export function url(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
}
export const navGroups = [
  { label: 'About us', href: '/about/', children: [
    { label: 'Mission, vision & values', href: '/about/mission/' },
    { label: 'Our history', href: '/about/history/' },
    { label: 'Our members', href: '/about/members/' },
  ] },
  { label: 'Complete streets', href: '/complete-streets/' },
  { label: 'Campaigns', href: '/campaigns/', children: [
    { label: 'Current campaigns', href: '/campaigns/current/' },
    { label: 'Past campaigns', href: '/campaigns/past/' },
    { label: 'Project inventory & map', href: '/campaigns/project-inventory/' },
  ] },
  { label: 'Resources', href: '/resources/', children: [
    { label: 'Policies & plans', href: '/resources/policies/' },
    { label: 'Current city projects', href: '/resources/projects/' },
    { label: 'Research & data', href: '/resources/research/' },
    { label: '2025 report card', href: '/resources/report-card-2025/' },
    { label: 'Bike routes', href: '/resources/bike-routes/' },
  ] },
];
