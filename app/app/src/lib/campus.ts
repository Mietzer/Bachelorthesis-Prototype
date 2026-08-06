import {
  events,
  formatDate,
  formatSpokenDate,
  getRecentNotices,
  getUpcomingEvents,
  notices,
  type CampusEvent,
  type Notice,
} from 'core';

export type { CampusEvent, Notice };

export function getEvents(): CampusEvent[] {
  return getUpcomingEvents(events);
}

export function getNotices(): Notice[] {
  return getRecentNotices(notices);
}

export function buildEventSummary(count: number): string {
  return count === 1 ? '1 Termin' : `${count} Termine`;
}

export function buildNoticeSummary(count: number): string {
  return count === 1 ? '1 Aushang' : `${count} Aushänge`;
}

export function buildEventDetail(event: CampusEvent): string {
  return [formatDate(event.date), event.start, event.place].join(' · ');
}

export function buildEventLabel(event: CampusEvent): string {
  return [
    event.title,
    formatSpokenDate(event.date),
    `${event.start} Uhr`,
    event.place,
    event.organizer,
  ].join(', ');
}

export function buildNoticeDetail(notice: Notice): string {
  return `seit ${formatDate(notice.publishedOn)} · ${notice.source}`;
}

export function buildNoticeLabel(notice: Notice): string {
  return [
    notice.title,
    `ausgehängt seit ${formatSpokenDate(notice.publishedOn)}`,
    notice.source,
  ].join(', ');
}
