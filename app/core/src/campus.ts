import type { CampusEvent, Notice } from './types';


function toSortKey(event: CampusEvent): string {
  return `${event.date}T${event.start}`;
}


export function getUpcomingEvents(events: CampusEvent[]): CampusEvent[] {
  return [...events].sort((a, b) => toSortKey(a).localeCompare(toSortKey(b)));
}

export function getRecentNotices(notices: Notice[]): Notice[] {
  return [...notices].sort((a, b) =>
    b.publishedOn.localeCompare(a.publishedOn),
  );
}
