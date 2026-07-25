import { timetable } from 'core'
import { AreaNavigation, type Area } from './components/AreaNavigation'
import { Header } from './components/Header'
import { ViewControls } from './components/ViewControls'
import { useCurrentTime } from './hooks/useCurrentTime'
import { useViewSettings } from './hooks/useViewSettings'
import { TimetablePage } from './pages/TimetablePage'
import styles from './App.module.css'

const AREAS: Area[] = [
  { id: 'timetable', label: 'Stundenplan', title: 'Stundenplan heute' },
  { id: 'rooms', label: 'Räume', title: 'Räume' },
  { id: 'buildings', label: 'Gebäude', title: 'Gebäude' },
  { id: 'events', label: 'Veranstaltungen', title: 'Veranstaltungen' },
  { id: 'notices', label: 'Aushänge', title: 'Aushänge' },
]

const activeArea = AREAS[0]

function App() {
  const { containerProps, ...viewSettings } = useViewSettings()
  const time = useCurrentTime()

  return (
    <div className={styles.display} {...containerProps}>
      <Header
        title={activeArea.title}
        date={timetable.date}
        time={time}
        actions={<ViewControls {...viewSettings} />}
      />

      <main className={styles.content}>
        <TimetablePage timetable={timetable} />
      </main>

      <AreaNavigation areas={AREAS} activeArea={activeArea.id} />
    </div>
  )
}

export default App
