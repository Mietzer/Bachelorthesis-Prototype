import {
  formatTimeRange,
  getChanges,
  getStatusLabel,
  timetable,
  type TimetableEntry,
} from 'core';

export type { TimetableEntry };

export function getTimetableChanges(): TimetableEntry[] {
  return getChanges(timetable);
}

export function buildChangeSummary(count: number): string {
  return count === 1 ? '1 Änderung' : `${count} Änderungen`;
}

export function buildStatusBadge(entry: TimetableEntry): string {
  return getStatusLabel(entry.status).toLocaleUpperCase('de-DE');
}

export function buildEntryDetail(entry: TimetableEntry): string {
  return entry.status === 'relocated'
    ? `neu: ${entry.room}`
    : `${formatTimeRange(entry)} · ${entry.room}`;
}

export function buildEntryLabel(entry: TimetableEntry): string {
  const parts = [getStatusLabel(entry.status), entry.title];

  if (entry.status === 'relocated') {
    parts.push(`neuer Raum ${entry.room}`);
  } else {
    parts.push(`von ${entry.start} bis ${entry.end}`, `Raum ${entry.room}`);
  }

  return parts.join(', ');
}
