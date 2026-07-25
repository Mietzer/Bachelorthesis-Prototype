import { getChanges, type Timetable } from 'core'
import { Section } from '../components/ui/Section'
import { TimetableEntryList } from '../components/TimetableEntryList'

export interface TimetablePageProps {
  timetable: Timetable
}

export function TimetablePage({ timetable }: TimetablePageProps) {
  const changes = getChanges(timetable)

  return (
    <Section title="Änderungen" count={changes.length}>
      <TimetableEntryList entries={changes} />
    </Section>
  )
}
