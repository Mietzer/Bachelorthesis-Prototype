import eventsData from './data/events.json';
import noticesData from './data/notices.json';
import timetableData from './data/timetable.json';
import type { CampusEvent, Notice, Timetable } from './types';

export type {
  CampusEvent,
  EntryStatus,
  Location,
  Notice,
  Timetable,
  TimetableEntry,
} from './types';

export {
  formatDate,
  formatTime,
  formatTimeRange,
  getChanges,
  getScheduled,
  getStatusLabel,
} from './timetable';

export { getRecentNotices, getUpcomingEvents } from './campus';

export const timetable: Timetable = timetableData as Timetable;
export const events: CampusEvent[] = eventsData as CampusEvent[];
export const notices: Notice[] = noticesData as Notice[];
