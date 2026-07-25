import timetableData from './data/timetable.json';
import type { Timetable } from './types';

export type {
  EntryStatus,
  Location,
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

export const timetable: Timetable = timetableData as Timetable;
