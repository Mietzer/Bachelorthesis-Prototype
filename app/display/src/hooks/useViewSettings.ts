import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from 'react'

const MIN_FONT_SCALE = 1
const MAX_FONT_SCALE = 2
const FONT_SCALE_STEP = 0.25

export type ContrastMode = 'default' | 'dark' | 'high'

const CONTRAST_MODES: ContrastMode[] = ['default', 'dark', 'high']

function clampFontScale(scale: number): number {
  return Math.min(MAX_FONT_SCALE, Math.max(MIN_FONT_SCALE, scale))
}

export interface ViewSettings {
  contrastMode: ContrastMode
  /** Steps through the contrast modes in order and wraps around. */
  nextContrastMode: () => void
  /** Current font scale as a percentage, 100 to 200. */
  fontScalePercent: number
  increaseFontSize: () => void
  decreaseFontSize: () => void
  canIncreaseFontSize: boolean
  canDecreaseFontSize: boolean
}

export interface ViewSettingsResult extends ViewSettings {
  /** Spread onto the root element to apply the font scale to all children. */
  containerProps: {
    style: CSSProperties
  }
}

export function useViewSettings(): ViewSettingsResult {
  const [fontScale, setFontScale] = useState(MIN_FONT_SCALE)
  const [contrastMode, setContrastMode] = useState<ContrastMode>('default')

  // Set on the document so the color tokens also cover <body> and overscroll.
  useEffect(() => {
    document.documentElement.dataset.contrast = contrastMode
  }, [contrastMode])

  const changeFontScale = useCallback((step: number) => {
    setFontScale((current) => clampFontScale(current + step))
  }, [])

  const nextContrastMode = useCallback(() => {
    setContrastMode((current) => {
      const next = CONTRAST_MODES.indexOf(current) + 1
      return CONTRAST_MODES[next % CONTRAST_MODES.length]
    })
  }, [])

  return useMemo(
    () => ({
      contrastMode,
      nextContrastMode,
      fontScalePercent: Math.round(fontScale * 100),
      increaseFontSize: () => changeFontScale(FONT_SCALE_STEP),
      decreaseFontSize: () => changeFontScale(-FONT_SCALE_STEP),
      canIncreaseFontSize: fontScale < MAX_FONT_SCALE,
      canDecreaseFontSize: fontScale > MIN_FONT_SCALE,
      containerProps: {
        style: { '--font-scale': fontScale } as CSSProperties,
      },
    }),
    [changeFontScale, contrastMode, fontScale, nextContrastMode],
  )
}
