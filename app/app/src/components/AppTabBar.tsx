import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { NavigationTab } from '../data/strings';
import {
  borderWidth,
  colors,
  fontSize,
  spacing,
  touchTarget,
} from '../theme/tokens';

const ACTIVE_BAR_HEIGHT = 3;

export interface AppTabBarProps {
  tabs: readonly NavigationTab[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function AppTabBar({ tabs, activeId, onSelect }: AppTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      accessibilityRole="tablist"
      style={[styles.bar, { paddingBottom: insets.bottom + spacing.s }]}
    >
      {tabs.map((tab) => {
        const selected = tab.id === activeId;

        return (
          <Pressable
            accessibilityLabel={tab.title}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            key={tab.id}
            onPress={() => onSelect(tab.id)}
            style={({ pressed }) =>
              pressed ? [styles.tab, styles.tabPressed] : styles.tab
            }
          >
            <View style={selected ? styles.activeBar : styles.activeBarHidden} />
            <Text style={selected ? styles.labelActive : styles.label}>
              {tab.barTitle ?? tab.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.background,
    borderTopColor: colors.border,
    borderTopWidth: borderWidth.thin,
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    gap: spacing.s,
    justifyContent: 'center',
    minHeight: touchTarget,
    paddingBottom: spacing.s,
    paddingHorizontal: spacing.xs,
  },
  tabPressed: {
    backgroundColor: colors.surface,
  },
  activeBar: {
    alignSelf: 'stretch',
    backgroundColor: colors.accent,
    height: ACTIVE_BAR_HEIGHT,
  },
  activeBarHidden: {
    height: ACTIVE_BAR_HEIGHT,
  },
  label: {
    color: colors.textMuted,
    fontSize: fontSize.small,
    textAlign: 'center',
  },
  labelActive: {
    color: colors.accent,
    fontSize: fontSize.small,
    fontWeight: '700',
    textAlign: 'center',
  },
});
