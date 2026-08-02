import { formatDate, type CampusEvent } from 'core'
import { Card } from './ui/Card'
import { SeparatedList } from './ui/SeparatedList'
import styles from './EventCard.module.css'

export interface EventCardProps {
  event: CampusEvent
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <span className={styles.date}>{formatDate(event.date)}</span>
      <time className={styles.time} dateTime={`${event.date}T${event.start}`}>
        {event.start}
      </time>
      <span className={styles.title}>{event.title}</span>
      <span className={styles.meta}>
        <SeparatedList items={[event.place, event.organizer]} />
      </span>
    </Card>
  )
}
