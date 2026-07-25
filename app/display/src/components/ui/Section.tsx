import type { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'
import styles from './Section.module.css'

export interface SectionProps {
  title: string
  count?: number
  className?: string
  children: ReactNode
}

export function Section({ title, count, className, children }: SectionProps) {
  const label = count === undefined ? title : `${title} (${count})`

  return (
    <section className={classNames(styles.section, className)} aria-label={label}>
      <h2 className={styles.title}>{label}</h2>
      {children}
    </section>
  )
}
