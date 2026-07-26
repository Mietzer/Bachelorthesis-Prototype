import { useEffect, useRef, type ComponentRef } from 'react';
import { AccessibilityInfo, findNodeHandle, Text } from 'react-native';

const FOCUS_DELAY_MS = 300;

export function useScreenFocusAnnounce(spokenTitle: string) {
  const headingRef = useRef<ComponentRef<typeof Text>>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const handle =
        headingRef.current === null ? null : findNodeHandle(headingRef.current);

      if (handle === null) {
        AccessibilityInfo.announceForAccessibility(spokenTitle);
        return;
      }

      AccessibilityInfo.setAccessibilityFocus(handle);
    }, FOCUS_DELAY_MS);

    return () => clearTimeout(timer);
  }, [spokenTitle]);

  return headingRef;
}
