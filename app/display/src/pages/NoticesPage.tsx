import { getRecentNotices, type Notice } from 'core'
import { NoticeCard } from '../components/NoticeCard'
import { CardList } from '../components/ui/CardList'
import { Section } from '../components/ui/Section'

export interface NoticesPageProps {
  notices: Notice[]
}

export function NoticesPage({ notices }: NoticesPageProps) {
  const recent = getRecentNotices(notices)

  return (
    <Section title="Aktuelle Aushänge" count={recent.length}>
      <CardList>
        {recent.map((notice) => (
          <li key={notice.id}>
            <NoticeCard notice={notice} />
          </li>
        ))}
      </CardList>
    </Section>
  )
}
