import { StyleSheet, Text, View } from 'react-native';

import {
  buildEntryDetail,
  buildEntryLabel,
  buildStatusBadge,
  type TimetableEntry,
} from '../lib/timetable';
import { borderWidth, colors, fontSize, radius, spacing } from '../theme/tokens';
import { AppStatusBadge } from './AppStatusBadge';

export interface AppTimetableEntryProps {
  entry: TimetableEntry;
}

export function AppTimetableEntry({ entry }: AppTimetableEntryProps) {
  return (
    <View accessible accessibilityLabel={buildEntryLabel(entry)} style={styles.card}>
      <View style={styles.headline}>
        <AppStatusBadge label={buildStatusBadge(entry)} />
        <Text style={styles.title}>{entry.title}</Text>
      </View>
      <Text style={styles.detail}>{buildEntryDetail(entry)}</Text>
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
