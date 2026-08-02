import { getRoomKindLabel, type Room } from 'core'
import { Card } from './ui/Card'
import styles from './RoomCard.module.css'

export interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card>
      <span className={styles.code}>{room.code}</span>
      <span className={styles.name}>{room.name}</span>
      <span className={styles.kind}>{getRoomKindLabel(room.kind)}</span>
    </Card>
  )
}
