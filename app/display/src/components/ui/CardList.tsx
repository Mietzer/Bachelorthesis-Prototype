import type { ReactNode } from 'react'
import styles from './CardList.module.css'

export interface CardListProps {
  children: ReactNode
}

export function CardList({ children }: CardListProps) {
  return <ul className={styles.list}>{children}</ul>
}
