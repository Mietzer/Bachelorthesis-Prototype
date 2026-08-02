import type { TimetableEntry } from 'core'
import { TimetableEntryCard } from './TimetableEntryCard'
import { CardList } from './ui/CardList'

export interface TimetableEntryListProps {
  entries: TimetableEntry[]
}

export function TimetableEntryList({ entries }: TimetableEntryListProps) {
  return (
    <CardList>
      {entries.map((entry) => (
        <li key={entry.id}>
          <TimetableEntryCard entry={entry} />
        </li>
      ))}
    </CardList>
  )
}
