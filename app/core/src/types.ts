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

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  start: string;
  place: string;
  organizer: string;
}

export interface Notice {
  id: string;
  title: string;
  publishedOn: string;
  source: string;
}

export type RoomKind = 'lab' | 'lecture' | 'seminar';

export interface Room {
  id: string;
  code: string;
  name: string;
  floor: number;
  kind: RoomKind;
}

export interface RoomGroup {
  kind: RoomKind;
  rooms: Room[];
}
