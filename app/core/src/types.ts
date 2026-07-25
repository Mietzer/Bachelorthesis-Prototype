export type EntryStatus = 'scheduled' | 'cancelled' | 'relocated';

export interface TimetableEntry {
  id: string;
  title: string;
  start: string;
  end: string;
  room: string;
  previousRoom?: string;
  status: EntryStatus;
}

export interface Location {
  code: string;
  department: string;
}

export interface Timetable {
  location: Location;
  date: string;
  entries: TimetableEntry[];
}
