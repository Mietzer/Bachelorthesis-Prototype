import { formatDate, type Notice } from 'core'
import { Card } from './ui/Card'
import styles from './NoticeCard.module.css'

export interface NoticeCardProps {
  notice: Notice
}

export function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <Card>
      <span className={styles.since}>
        seit{' '}
        <time className={styles.date} dateTime={notice.publishedOn}>
          {formatDate(notice.publishedOn)}
        </time>
      </span>
      <span className={styles.title}>{notice.title}</span>
      <span className={styles.source}>{notice.source}</span>
    </Card>
  )
}
