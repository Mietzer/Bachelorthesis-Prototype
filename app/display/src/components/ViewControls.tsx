import type { ContrastMode, ViewSettings } from '../hooks/useViewSettings'
import { Button } from './ui/Button'
import styles from './ViewControls.module.css'

const CONTRAST_LABELS: Record<ContrastMode, string> = {
  default: 'Standard',
  dark: 'Dunkel',
  high: 'Maximaler Kontrast',
}

export type ViewControlsProps = ViewSettings

export function ViewControls({
  contrastMode,
  nextContrastMode,
  fontScalePercent,
  increaseFontSize,
  decreaseFontSize,
  canIncreaseFontSize,
  canDecreaseFontSize,
}: ViewControlsProps) {
  return (
    <div className={styles.controls} role="group" aria-label="Ansicht anpassen">
      <span className={styles.label} aria-hidden="true">
        {'Ansicht\nanpassen'}
      </span>

      <div className={styles.buttons}>
        <Button onClick={decreaseFontSize} disabled={!canDecreaseFontSize}>
          A<span aria-hidden="true">−</span>
          <span className="visually-hidden">Schrift kleiner</span>
        </Button>

        <span className={styles.fontScale} aria-live="polite">
          {fontScalePercent} %<span className="visually-hidden"> Schriftgröße</span>
        </span>

        <Button onClick={increaseFontSize} disabled={!canIncreaseFontSize}>
          A<span aria-hidden="true">+</span>
          <span className="visually-hidden">Schrift größer</span>
        </Button>

        <Button onClick={nextContrastMode}>
          Kontrast
          <span className="visually-hidden">
            , aktuell: {CONTRAST_LABELS[contrastMode]}
          </span>
        </Button>
      </div>

      {/* The contrast mode has no visible readout, so its new value is announced. */}
      <span className="visually-hidden" aria-live="polite">
        Kontrast: {CONTRAST_LABELS[contrastMode]}
      </span>
    </div>
  )
}
