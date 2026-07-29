import type { ComponentRef, Ref } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors, fontSize } from '../theme/tokens';

export interface AppHeadingProps {
  title: string;
  level?: 1 | 2;
  tone?: 'default' | 'inverse';
  ref?: Ref<ComponentRef<typeof Text>>;
}

export function AppHeading({
  title,
  level = 1,
  tone = 'default',
  ref,
}: AppHeadingProps) {
  return (
    <Text
      ref={ref}
      accessibilityRole="header"
      style={[
        level === 1 ? styles.level1 : styles.level2,
        tone === 'inverse' ? styles.inverse : null,
      ]}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  level1: {
    color: colors.text,
    fontSize: fontSize.title,
    fontWeight: '700',
  },
  level2: {
    color: colors.text,
    fontSize: fontSize.node,
    fontWeight: '700',
  },
  inverse: {
    color: colors.headerText,
  },
});
