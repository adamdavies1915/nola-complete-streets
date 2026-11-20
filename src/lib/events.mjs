export const TIME_ZONE = 'America/Chicago';
export function nextEvent(events, now = new Date()) {
  return events.filter(e => e.status === 'scheduled' && e.published !== false && new Date(e.end) > now)
    .sort((a, b) => new Date(a.start) - new Date(b.start))[0];
}
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { timeZone: TIME_ZONE, month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));
}
export function formatTime(date) {
  return new Intl.DateTimeFormat('en-US', { timeZone: TIME_ZONE, hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }).format(new Date(date));
}
export function buildTime() {
  const value = process.env.BUILD_TIME ? new Date(process.env.BUILD_TIME) : new Date();
  if (Number.isNaN(value.getTime())) throw new Error('Invalid BUILD_TIME');
  return value;
}
