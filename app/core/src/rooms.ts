import type { Room, RoomGroup, RoomKind } from './types';

const ROOM_KIND_LABELS: Record<RoomKind, string> = {
  lab: 'Labor',
  lecture: 'Vorlesungssaal',
  seminar: 'Seminarraum',
  room: 'Sonstiger Raum',
};

const ROOM_KIND_ORDER: RoomKind[] = ['lab', 'lecture', 'seminar', 'room'];

export function getRoomKindLabel(kind: RoomKind): string {
  return ROOM_KIND_LABELS[kind];
}

export function formatFloor(floor: number): string {
  if (floor < 0) {
    return 'Untergeschoss';
  }

  return floor === 0 ? 'Erdgeschoss' : `${floor}. Etage`;
}

export function getFloorCode(rooms: Room[]): string {
  const first = rooms[0];

  if (first === undefined) {
    return '';
  }

  const separator = first.code.indexOf('.');

  return separator === -1 ? first.code : first.code.slice(0, separator + 2);
}

export function getFloors(rooms: Room[]): number[] {
  const floors = new Set(rooms.map((room) => room.floor));
  return [...floors].sort((a, b) => a - b);
}

export function getRoomsOnFloor(rooms: Room[], floor: number): Room[] {
  return rooms
    .filter((room) => room.floor === floor)
    .sort((a, b) => a.code.localeCompare(b.code));
}

function normalizeCode(value: string): string {
  return value.replace(/[\s.]/g, '').toLowerCase();
}

export function findRooms(rooms: Room[], query: string): Room[] {
  const text = query.trim().toLowerCase();

  if (text === '') {
    return [];
  }

  const code = normalizeCode(text);

  return rooms
    .filter(
      (room) =>
        (code !== '' && normalizeCode(room.code).includes(code)) ||
        room.name.toLowerCase().includes(text),
    )
    .sort((a, b) => a.code.localeCompare(b.code));
}

export function groupRoomsByKind(rooms: Room[]): RoomGroup[] {
  return ROOM_KIND_ORDER.map((kind) => ({
    kind,
    rooms: rooms.filter((room) => room.kind === kind),
  })).filter((group) => group.rooms.length > 0);
}
