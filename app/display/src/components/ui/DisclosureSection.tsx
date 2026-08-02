import { useId, type ReactNode } from 'react'
import { classNames } from '../../utils/classNames'
import styles from './DisclosureSection.module.css'

export interface DisclosureSectionProps {
  title: string
  count?: number
  expanded: boolean
  onToggle: () => void
  children: ReactNode
}

export function DisclosureSection({
  title,
  count,
  expanded,
  onToggle,
  children,
}: DisclosureSectionProps) {
  const contentId = useId()
  const label = count === undefined ? title : `${title} (${count})`

  return (
    <section className={styles.section} aria-label={label}>
      <h2 className={styles.heading}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={onToggle}
        >
          <span>{label}</span>
          <svg
            className={classNames(styles.marker, expanded && styles.expanded)}
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </h2>

      <div id={contentId} hidden={!expanded}>
        {children}
      </div>
    </section>
  )
}
