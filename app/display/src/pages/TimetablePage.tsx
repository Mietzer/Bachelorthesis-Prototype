import { getChanges, type Timetable } from 'core'
import { Section } from '../components/ui/Section'
import { TimetableEntryList } from '../components/TimetableEntryList'
import styles from './TimetablePage.module.css'

export interface TimetablePageProps {
  timetable: Timetable
}

export function TimetablePage({ timetable }: TimetablePageProps) {
  const changes = getChanges(timetable)

  return (
    <>
      <h1 className={styles.title}>Stundenplan heute</h1>
      <Section title="Änderungen" count={changes.length}>
        <TimetableEntryList entries={changes} />
      </Section>
    </>
  )
}
