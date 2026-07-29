import { StyleSheet, Text } from 'react-native';

import { borderWidth, colors, fontSize, radius, spacing } from '../theme/tokens';

export interface AppStatusBadgeProps {
  label: string;
}

export function AppStatusBadge({ label }: AppStatusBadgeProps) {
  return <Text style={styles.badge}>{label}</Text>;
}

const styles = StyleSheet.create({
  badge: {
    borderColor: colors.statusChanged,
    borderRadius: radius.s,
    borderWidth: borderWidth.thick,
    color: colors.statusChanged,
    fontSize: fontSize.small,
    fontWeight: '700',
    overflow: 'hidden',
    paddingHorizontal: spacing.s,
    paddingVertical: spacing.xs,
  },
});
