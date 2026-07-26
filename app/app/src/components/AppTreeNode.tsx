import { Pressable, StyleSheet, Text, View } from 'react-native';

import { treeNodeState } from '../data/strings';
import { buildTreeNodeLabel } from '../lib/labels';
import {
  borderWidth,
  colors,
  fontSize,
  radius,
  spacing,
  touchTarget,
} from '../theme/tokens';

export interface AppTreeNodeProps {
  title: string;
  summary?: string;
  level?: number;
  expanded: boolean;
  onToggle?: () => void;
}

export function AppTreeNode({
  title,
  summary,
  level = 1,
  expanded,
  onToggle,
}: AppTreeNodeProps) {
  const stateText = expanded ? treeNodeState.expanded : treeNodeState.collapsed;
  const stateSeparator = summary === undefined ? ' ' : ' · ';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      accessibilityLabel={buildTreeNodeLabel({ title, summary, level })}
      onPress={onToggle}
      style={({ pressed }) =>
        pressed ? [styles.node, styles.nodePressed] : styles.node
      }
    >
      <Text style={styles.marker}>{expanded ? '▼' : '►'}</Text>
      <View style={styles.body}>
        <Text style={styles.title}>
          {title}
          {summary === undefined ? null : (
            <Text style={styles.summary}> {summary}</Text>
          )}
          <Text style={styles.state}>
            {stateSeparator}
            {stateText}
          </Text>
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  node: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.m,
    borderWidth: borderWidth.thin,
    flexDirection: 'row',
    gap: spacing.s,
    minHeight: touchTarget,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.m,
  },
  nodePressed: {
    backgroundColor: colors.headerBackground,
    borderColor: colors.accent,
  },
  marker: {
    color: colors.text,
    fontSize: fontSize.small,
  },
  body: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: fontSize.node,
    fontWeight: '700',
  },
  summary: {
    color: colors.textMuted,
    fontSize: fontSize.body,
    fontWeight: '400',
  },
  state: {
    color: colors.textMuted,
    fontSize: fontSize.body,
    fontWeight: '400',
  },
});
