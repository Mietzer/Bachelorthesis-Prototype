import { Button } from './ui/Button'
import styles from './AreaNavigation.module.css'

export interface Area {
  id: string
  label: string
}

export interface AreaNavigationProps {
  areas: Area[]
  activeArea: string
  onSelect?: (id: string) => void
}

export function AreaNavigation({
  areas,
  activeArea,
  onSelect,
}: AreaNavigationProps) {
  return (
    <nav className={styles.navigation} aria-label="Bereiche">
      <ul className={styles.list}>
        {areas.map(({ id, label }) => {
          const isActive = id === activeArea
          return (
            <li key={id} className={styles.item}>
              <Button
                fullWidth
                variant={isActive ? 'active' : 'default'}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onSelect?.(id)}
              >
                {label}
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
