import { getUpcomingEvents, type CampusEvent } from 'core'
import { EventCard } from '../components/EventCard'
import { CardList } from '../components/ui/CardList'
import { Section } from '../components/ui/Section'

export interface EventsPageProps {
  events: CampusEvent[]
}

export function EventsPage({ events }: EventsPageProps) {
  const upcoming = getUpcomingEvents(events)

  return (
    <Section title="Nächste Termine" count={upcoming.length}>
      <CardList>
        {upcoming.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </CardList>
    </Section>
  )
}
