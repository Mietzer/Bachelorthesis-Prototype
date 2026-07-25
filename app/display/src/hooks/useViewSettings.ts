import { useMemo, useState, type CSSProperties } from 'react'

const FONT_SCALES = [1, 1.15, 1.3, 1.5] as const

export interface ViewSettings {
  highContrast: boolean
  toggleContrast: () => void
  increaseFontSize: () => void
  decreaseFontSize: () => void
  canIncreaseFontSize: boolean
  canDecreaseFontSize: boolean
}

export interface ViewSettingsResult extends ViewSettings {
  /** Spread onto the root element: applies contrast mode and font scale to all children. */
  containerProps: {
    'data-contrast': 'high' | 'default'
    style: CSSProperties
  }
}

export function useViewSettings(): ViewSettingsResult {
  const [scaleIndex, setScaleIndex] = useState(0)
  const [highContrast, setHighContrast] = useState(false)

  const lastIndex = FONT_SCALES.length - 1

  return useMemo(
    () => ({
      highContrast,
      toggleContrast: () => setHighContrast((active) => !active),
      increaseFontSize: () =>
        setScaleIndex((current) => Math.min(lastIndex, current + 1)),
      decreaseFontSize: () =>
        setScaleIndex((current) => Math.max(0, current - 1)),
      canIncreaseFontSize: scaleIndex < lastIndex,
      canDecreaseFontSize: scaleIndex > 0,
      containerProps: {
        'data-contrast': highContrast ? 'high' : 'default',
        style: { '--font-scale': FONT_SCALES[scaleIndex] } as CSSProperties,
      },
    }),
    [highContrast, scaleIndex, lastIndex],
  )
}
