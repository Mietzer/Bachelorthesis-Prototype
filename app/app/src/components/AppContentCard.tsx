import { StyleSheet, Text, View } from 'react-native';

import { appendPosition, type ListPosition } from '../lib/listPosition';
import { borderWidth, colors, fontSize, radius, spacing } from '../theme/tokens';
import { AppStatusBadge } from './AppStatusBadge';

export interface AppContentCardProps {
  title: string;
  detail: string;
  badge?: string;
  accessibilityLabel: string;
  position?: ListPosition;
}

export function AppContentCard({
  title,
  detail,
  badge,
  accessibilityLabel,
  position,
}: AppContentCardProps) {
  return (
    <View
      accessible
      accessibilityLabel={appendPosition(accessibilityLabel, position)}
      style={styles.card}
    >
      <View style={styles.headline}>
        {badge === undefined ? null : <AppStatusBadge label={badge} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.l,
    borderWidth: borderWidth.thin,
    gap: spacing.xs,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m,
  },
  headline: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s,
  },
  title: {
    color: colors.text,
    flexShrink: 1,
    fontSize: fontSize.node,
    fontWeight: '700',
  },
  detail: {
    color: colors.textMuted,
    fontSize: fontSize.body,
  },
});
