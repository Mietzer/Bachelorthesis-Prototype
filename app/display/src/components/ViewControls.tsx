import type { ViewSettings } from '../hooks/useViewSettings'
import { Button } from './ui/Button'
import styles from './ViewControls.module.css'

export type ViewControlsProps = ViewSettings

export function ViewControls({
  highContrast,
  toggleContrast,
  fontScalePercent,
  increaseFontSize,
  decreaseFontSize,
  canIncreaseFontSize,
  canDecreaseFontSize,
}: ViewControlsProps) {
  return (
    <div className={styles.controls} role="group" aria-label="Ansicht anpassen">
      <span className={styles.label} aria-hidden="true">
        Ansicht anpassen
      </span>

      <Button onClick={decreaseFontSize} disabled={!canDecreaseFontSize}>
        Schrift A<span aria-hidden="true">−</span>
        <span className="visually-hidden"> kleiner</span>
      </Button>

      <span className={styles.fontScale} aria-live="polite">
        {fontScalePercent} %<span className="visually-hidden"> Schriftgröße</span>
      </span>

      <Button onClick={increaseFontSize} disabled={!canIncreaseFontSize}>
        A<span aria-hidden="true">+</span>
        <span className="visually-hidden"> Schrift größer</span>
      </Button>

      <Button onClick={toggleContrast} aria-pressed={highContrast}>
        Kontrast
      </Button>
    </div>
  )
}
