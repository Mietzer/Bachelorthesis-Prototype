import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  borderWidth,
  colors,
  fontSize,
  radius,
  spacing,
  touchTarget,
} from '../theme/tokens';

const COLLAPSED = 'eingeklappt';
const EXPANDED = 'ausgeklappt';

export interface AppExpandableSectionProps {
  title: string;
  summary?: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function AppExpandableSection({
  title,
  summary,
  expanded,
  onToggle,
  children,
}: AppExpandableSectionProps) {
  const stateText = expanded ? EXPANDED : COLLAPSED;

  return (
    <View>
      <Pressable
        accessibilityLabel={
          summary === undefined ? title : `${title}, ${summary}`
        }
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        onPress={onToggle}
        style={({ pressed }) =>
          pressed ? [styles.header, styles.headerPressed] : styles.header
        }
      >
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.meta}>
            {summary === undefined || expanded
              ? stateText
              : `${summary} · ${stateText}`}
          </Text>
        </View>
      </Pressable>

      {expanded ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.l,
    borderWidth: borderWidth.thin,
    flexDirection: 'row',
    minHeight: touchTarget,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m,
  },
  headerPressed: {
    backgroundColor: colors.surfacePressed,
    borderColor: colors.accent,
  },
  body: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    color: colors.accent,
    fontSize: fontSize.node,
    fontWeight: '700',
  },
  meta: {
    color: colors.textMuted,
    fontSize: fontSize.body,
  },
  children: {
    borderLeftColor: colors.border,
    borderLeftWidth: borderWidth.thick,
    gap: spacing.m,
    marginLeft: spacing.m,
    marginTop: spacing.m,
    paddingLeft: spacing.m,
  },
});
