import { useState } from 'react'
import { events, notices, rooms, timetable } from 'core'
import { AreaNavigation, type Area } from './components/AreaNavigation'
import { Header } from './components/Header'
import { ViewControls } from './components/ViewControls'
import { useCurrentTime } from './hooks/useCurrentTime'
import { useViewSettings } from './hooks/useViewSettings'
import { BuildingPage } from './pages/BuildingPage'
import { EventsPage } from './pages/EventsPage'
import { NoticesPage } from './pages/NoticesPage'
import { TimetablePage } from './pages/TimetablePage'
import styles from './App.module.css'

const AREAS: Area[] = [
  { id: 'timetable', label: 'Stundenplan', title: 'Stundenplan heute' },
  { id: 'events', label: 'Veranstaltungen', title: 'Veranstaltungen' },
  { id: 'notices', label: 'Aushänge', title: 'Aushänge' },
  { id: 'building', label: 'Gebäude', title: 'Gebäude' },
]

function renderPage(area: Area) {
  switch (area.id) {
    case 'timetable':
      return <TimetablePage timetable={timetable} />
    case 'events':
      return <EventsPage events={events} />
    case 'notices':
      return <NoticesPage notices={notices} />
    case 'building':
      return <BuildingPage rooms={rooms} />
    default:
      return null
  }
}

function App() {
  const { containerProps, ...viewSettings } = useViewSettings()
  const time = useCurrentTime()
  const [activeId, setActiveId] = useState(AREAS[0].id)

  const activeArea = AREAS.find((area) => area.id === activeId) ?? AREAS[0]

  return (
    <div className={styles.display} {...containerProps}>
      <Header
        title={activeArea.title}
        date={timetable.date}
        time={time}
        actions={<ViewControls {...viewSettings} />}
      />

      <main className={styles.content}>{renderPage(activeArea)}</main>

      <AreaNavigation
        areas={AREAS}
        activeArea={activeArea.id}
        onSelect={setActiveId}
      />
    </div>
  )
}

export default App
