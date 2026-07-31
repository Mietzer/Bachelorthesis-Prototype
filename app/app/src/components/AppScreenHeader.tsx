import type { ComponentRef, Ref } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { borderWidth, colors, fontSize, spacing } from '../theme/tokens';
import { AppHeading } from './AppHeading';

export interface AppScreenHeaderProps {
  title: string;
  subtitle?: string;
  headingRef?: Ref<ComponentRef<typeof Text>>;
}

export function AppScreenHeader({
  title,
  subtitle,
  headingRef,
}: AppScreenHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + spacing.m }]}>
      <AppHeading ref={headingRef} title={title} tone="inverse" />
      {subtitle === undefined ? null : (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerBackground,
    borderBottomColor: colors.headerBackground,
    borderBottomWidth: borderWidth.thin,
    paddingBottom: spacing.l,
    paddingHorizontal: spacing.l,
  },
  subtitle: {
    color: colors.headerTextMuted,
    fontSize: fontSize.body,
    marginTop: spacing.xs,
  },
});
