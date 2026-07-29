import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { borderWidth, colors, indent, spacing } from '../theme/tokens';

export interface AppTreeChildrenProps {
  children: ReactNode;
}

export function AppTreeChildren({ children }: AppTreeChildrenProps) {
  return <View style={styles.children}>{children}</View>;
}

const styles = StyleSheet.create({
  children: {
    borderLeftColor: colors.border,
    borderLeftWidth: borderWidth.thick,
    gap: spacing.m,
    marginLeft: indent,
    marginTop: spacing.m,
    paddingLeft: indent,
  },
});
