import type { ReactNode } from 'react'
import { formatDate } from 'core'
import { SeparatedList } from './ui/SeparatedList'
import styles from './Header.module.css'

export interface HeaderProps {
  title: string
  /** ISO date "YYYY-MM-DD". */
  date: string
  /** Current time as "HH:MM". */
  time: string
  actions?: ReactNode
}

export function Header({ title, date, time, actions }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <SeparatedList
          items={[title, formatDate(date), <time key="time">{time}</time>]}
        />
      </h1>
      {actions}
    </header>
  )
}
