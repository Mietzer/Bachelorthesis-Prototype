import { useEffect, useState } from 'react'
import { formatTime } from 'core'

const TICK_MS = 10_000

export function useCurrentTime(): string {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), TICK_MS)
    return () => clearInterval(id)
  }, [])

  return formatTime(now)
}
