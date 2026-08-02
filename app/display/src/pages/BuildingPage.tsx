import { useCallback, useState } from 'react'
import {
  formatFloor,
  getFloorCode,
  getFloors,
  getRoomsOnFloor,
  groupRoomsByKind,
  type Room,
} from 'core'
import { RoomCard } from '../components/RoomCard'
import { CardList } from '../components/ui/CardList'
import { DisclosureSection } from '../components/ui/DisclosureSection'

export interface BuildingPageProps {
  rooms: Room[]
}

function orderRooms(rooms: Room[], floor: number): Room[] {
  return groupRoomsByKind(getRoomsOnFloor(rooms, floor)).flatMap(
    (group) => group.rooms,
  )
}

export function BuildingPage({ rooms }: BuildingPageProps) {
  const [expandedFloors, setExpandedFloors] = useState<ReadonlySet<number>>(
    () => new Set(),
  )

  const toggleFloor = useCallback((floor: number) => {
    setExpandedFloors((current) => {
      const next = new Set(current)

      if (!next.delete(floor)) {
        next.add(floor)
      }

      return next
    })
  }, [])

  return (
    <>
      {getFloors(rooms).map((floor) => {
        const roomsOnFloor = orderRooms(rooms, floor)

        return (
          <DisclosureSection
            key={floor}
            title={`${getFloorCode(roomsOnFloor)} · ${formatFloor(floor)}`}
            count={roomsOnFloor.length}
            expanded={expandedFloors.has(floor)}
            onToggle={() => toggleFloor(floor)}
          >
            <CardList>
              {roomsOnFloor.map((room) => (
                <li key={room.id}>
                  <RoomCard room={room} />
                </li>
              ))}
            </CardList>
          </DisclosureSection>
        )
      })}
    </>
  )
}
