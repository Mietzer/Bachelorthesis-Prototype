import { useCallback, useMemo, useState, type CSSProperties } from 'react'

const MIN_FONT_SCALE = 1
const MAX_FONT_SCALE = 2
const FONT_SCALE_STEP = 0.25

function clampFontScale(scale: number): number {
  return Math.min(MAX_FONT_SCALE, Math.max(MIN_FONT_SCALE, scale))
}

export interface ViewSettings {
  highContrast: boolean
  toggleContrast: () => void
  /** Current font scale as a percentage, 100 to 200. */
  fontScalePercent: number
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
  const [fontScale, setFontScale] = useState(MIN_FONT_SCALE)
  const [highContrast, setHighContrast] = useState(false)

  const changeFontScale = useCallback((step: number) => {
    setFontScale((current) => clampFontScale(current + step))
  }, [])

  return useMemo(
    () => ({
      highContrast,
      toggleContrast: () => setHighContrast((active) => !active),
      fontScalePercent: Math.round(fontScale * 100),
      increaseFontSize: () => changeFontScale(FONT_SCALE_STEP),
      decreaseFontSize: () => changeFontScale(-FONT_SCALE_STEP),
      canIncreaseFontSize: fontScale < MAX_FONT_SCALE,
      canDecreaseFontSize: fontScale > MIN_FONT_SCALE,
      containerProps: {
        'data-contrast': highContrast ? 'high' : 'default',
        style: { '--font-scale': fontScale } as CSSProperties,
      },
    }),
    [changeFontScale, fontScale, highContrast],
  )
}
