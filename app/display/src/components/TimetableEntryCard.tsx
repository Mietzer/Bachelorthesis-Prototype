import { formatTimeRange, getStatusLabel, type TimetableEntry } from 'core'
import { classNames } from '../utils/classNames'
import { Card } from './ui/Card'
import styles from './TimetableEntryCard.module.css'

export interface TimetableEntryCardProps {
  entry: TimetableEntry
}

function getRoomText(entry: TimetableEntry): string {
  return entry.status === 'relocated'
    ? `neu: ${entry.room}`
    : `Raum ${entry.room}`
}

export function TimetableEntryCard({ entry }: TimetableEntryCardProps) {
  const isChanged = entry.status !== 'scheduled'

  return (
    <Card>
      <span
        className={classNames(
          styles.badge,
          isChanged ? styles.changed : styles.scheduled,
        )}
      >
        {getStatusLabel(entry.status)}
      </span>
      <span className={styles.time}>{formatTimeRange(entry)}</span>
      <span className={styles.title}>{entry.title}</span>
      <span className={styles.room}>{getRoomText(entry)}</span>
    </Card>
  )
}
