import eventsData from './data/events.json';
import noticesData from './data/notices.json';
import roomsData from './data/rooms.json';
import timetableData from './data/timetable.json';
import type { CampusEvent, Notice, Room, Timetable } from './types';

export type {
  CampusEvent,
  EntryStatus,
  Location,
  Notice,
  Room,
  RoomGroup,
  RoomKind,
  Timetable,
  TimetableEntry,
} from './types';

export {
  formatDate,
  formatSpokenDate,
  formatTime,
  formatTimeRange,
  getChanges,
  getScheduled,
  getStatusLabel,
} from './timetable';

export { getRecentNotices, getUpcomingEvents } from './campus';

export {
  findRooms,
  formatFloor,
  getFloorCode,
  getFloors,
  getRoomKindLabel,
  getRoomsOnFloor,
  groupRoomsByKind,
} from './rooms';

export const timetable: Timetable = timetableData as Timetable;
export const events: CampusEvent[] = eventsData as CampusEvent[];
export const notices: Notice[] = noticesData as Notice[];
export const rooms: Room[] = roomsData as Room[];
