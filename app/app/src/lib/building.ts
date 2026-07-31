import {
  findRoomsByCode,
  formatFloor,
  getFloors,
  getRoomKindLabel,
  getRoomsOnFloor,
  groupRoomsByKind,
  rooms,
  type Room,
} from 'core';

export type { Room };

export interface RoomGroupContent {
  kind: string;
  label: string;
  rooms: Room[];
}

export interface FloorContent {
  id: string;
  title: string;
  summary: string;
  groups: RoomGroupContent[];
}

function buildRoomSummary(count: number): string {
  return count === 1 ? '1 Raum' : `${count} Räume`;
}

export function buildFloorSummary(count: number): string {
  return count === 1 ? '1 Etage' : `${count} Etagen`;
}

export function getBuilding(): FloorContent[] {
  return getFloors(rooms).map((floor) => {
    const roomsOnFloor = getRoomsOnFloor(rooms, floor);

    return {
      id: `floor-${floor}`,
      title: formatFloor(floor),
      summary: buildRoomSummary(roomsOnFloor.length),
      groups: groupRoomsByKind(roomsOnFloor).map((group) => ({
        kind: group.kind,
        label: getRoomKindLabel(group.kind),
        rooms: group.rooms,
      })),
    };
  });
}

export function buildSpokenRoomCode(code: string): string {
  return code
    .split('')
    .filter((character) => character !== '.')
    .join(' ');
}

export function buildRoomLabel(room: Room, kindLabel: string): string {
  return `Raum ${buildSpokenRoomCode(room.code)}, ${room.name}, ${kindLabel}`;
}

export interface RoomResult {
  id: string;
  code: string;
  detail: string;
  label: string;
}

export function searchRooms(query: string): RoomResult[] {
  return findRoomsByCode(rooms, query).map((room) => {
    const kindLabel = getRoomKindLabel(room.kind);
    const floor = formatFloor(room.floor);

    return {
      id: room.id,
      code: room.code,
      detail: `${room.name} · ${kindLabel} · ${floor}`,
      label: `${buildRoomLabel(room, kindLabel)}, ${floor}`,
    };
  });
}

export function buildResultSummary(count: number): string {
  if (count === 0) {
    return 'Keine Treffer';
  }

  return count === 1 ? '1 Treffer' : `${count} Treffer`;
}
