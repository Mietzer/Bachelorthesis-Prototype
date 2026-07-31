import type { Room, RoomGroup, RoomKind } from './types';

const ROOM_KIND_LABELS: Record<RoomKind, string> = {
  lab: 'Labor',
  lecture: 'Vorlesungssaal',
  seminar: 'Seminarraum',
};

const ROOM_KIND_ORDER: RoomKind[] = ['lab', 'lecture', 'seminar'];

export function getRoomKindLabel(kind: RoomKind): string {
  return ROOM_KIND_LABELS[kind];
}

export function formatFloor(floor: number): string {
  return floor === 0 ? 'Erdgeschoss' : `${floor}. Etage`;
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

export function findRoomsByCode(rooms: Room[], query: string): Room[] {
  const needle = normalizeCode(query);

  if (needle === '') {
    return [];
  }

  return rooms
    .filter((room) => normalizeCode(room.code).includes(needle))
    .sort((a, b) => a.code.localeCompare(b.code));
}

export function groupRoomsByKind(rooms: Room[]): RoomGroup[] {
  return ROOM_KIND_ORDER.map((kind) => ({
    kind,
    rooms: rooms.filter((room) => room.kind === kind),
  })).filter((group) => group.rooms.length > 0);
}
