import type { ReactNode } from 'react'
import { formatDate, type Location } from 'core'
import { SeparatedList } from './ui/SeparatedList'
import styles from './Header.module.css'

export interface HeaderProps {
  location: Location
  /** ISO date "YYYY-MM-DD". */
  date: string
  /** Current time as "HH:MM". */
  time: string
  actions?: ReactNode
}

export function Header({ location, date, time, actions }: HeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.context}>
        <SeparatedList
          items={[
            location.code,
            location.department,
            formatDate(date),
            <time key="time">{time}</time>,
          ]}
        />
      </p>
      {actions}
    </header>
  )
}
