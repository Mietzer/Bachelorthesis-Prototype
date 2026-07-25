import type { TimetableEntry } from 'core'
import { TimetableEntryCard } from './TimetableEntryCard'
import styles from './TimetableEntryList.module.css'

export interface TimetableEntryListProps {
  entries: TimetableEntry[]
}

export function TimetableEntryList({ entries }: TimetableEntryListProps) {
  return (
    <ul className={styles.list}>
      {entries.map((entry) => (
        <li key={entry.id}>
          <TimetableEntryCard entry={entry} />
        </li>
      ))}
    </ul>
  )
}
