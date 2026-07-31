import {
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
