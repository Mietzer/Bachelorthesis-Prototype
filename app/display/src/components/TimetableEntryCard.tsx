import { formatTimeRange, getStatusLabel, type TimetableEntry } from 'core'
import { classNames } from '../utils/classNames'
import { SeparatedList } from './ui/SeparatedList'
import styles from './TimetableEntryCard.module.css'

export interface TimetableEntryCardProps {
  entry: TimetableEntry
}

function RoomInfo({ entry }: TimetableEntryCardProps) {
  const { room, previousRoom, status } = entry

  if (status === 'relocated') {
    return (
      <span>
        neu: {room}{' '}
        <span className={styles.previousRoom}>(vorher {previousRoom})</span>
      </span>
    )
  }

  return <span>{status === 'cancelled' ? `Raum ${room}` : room}</span>
}

export function TimetableEntryCard({ entry }: TimetableEntryCardProps) {
  const isChanged = entry.status !== 'scheduled'
  const statusLabel = getStatusLabel(entry.status)

  return (
    <div className={classNames(styles.card, isChanged && styles.changed)}>
      {isChanged && <span className={styles.badge}>{statusLabel}</span>}
      <span>
        <SeparatedList
          items={[
            formatTimeRange(entry),
            entry.title,
            <RoomInfo key="room" entry={entry} />,
            !isChanged && statusLabel.toLowerCase(),
          ]}
        />
      </span>
    </div>
  )
}
