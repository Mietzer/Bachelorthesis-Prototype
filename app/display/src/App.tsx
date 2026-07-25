import { timetable } from 'core'
import { AreaNavigation, type Area } from './components/AreaNavigation'
import { Header } from './components/Header'
import { ViewControls } from './components/ViewControls'
import { useCurrentTime } from './hooks/useCurrentTime'
import { useViewSettings } from './hooks/useViewSettings'
import { TimetablePage } from './pages/TimetablePage'
import styles from './App.module.css'

const AREAS: Area[] = [
  { id: 'timetable', label: 'Stundenplan' },
  { id: 'rooms', label: 'Räume' },
  { id: 'buildings', label: 'Gebäude' },
  { id: 'events', label: 'Veranstaltungen' },
  { id: 'notices', label: 'Aushänge' },
]

function App() {
  const { containerProps, ...viewSettings } = useViewSettings()
  const time = useCurrentTime()

  return (
    <div className={styles.display} {...containerProps}>
      <Header
        location={timetable.location}
        date={timetable.date}
        time={time}
        actions={<ViewControls {...viewSettings} />}
      />

      <main className={styles.content}>
        <TimetablePage timetable={timetable} />
      </main>

      <AreaNavigation areas={AREAS} activeArea="timetable" />
    </div>
  )
}

export default App
