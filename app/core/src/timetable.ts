import type { EntryStatus, Timetable, TimetableEntry } from './types';

export function getChanges(timetable: Timetable): TimetableEntry[] {
  return timetable.entries.filter((entry) => entry.status !== 'scheduled');
}

export function getScheduled(timetable: Timetable): TimetableEntry[] {
  return timetable.entries.filter((entry) => entry.status === 'scheduled');
}

const STATUS_LABELS: Record<EntryStatus, string> = {
  scheduled: 'Planmäßig',
  cancelled: 'Entfällt',
  relocated: 'Verlegt',
};

export function getStatusLabel(status: EntryStatus): string {
  return STATUS_LABELS[status];
}

export function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  const weekday = date
    .toLocaleDateString('de-DE', { weekday: 'short' })
    .replace('.', '');
  const dayMonth = date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
  });
  return `${weekday}, ${dayMonth}`;
}

export function formatSpokenDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatTimeRange(entry: TimetableEntry): string {
  return `${entry.start}–${entry.end}`;
}
