import type { ComponentRef, Ref } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

import { borderWidth, colors, spacing } from '../theme/tokens';
import { AppHeading } from './AppHeading';

const topInset = Platform.select({
  android: StatusBar.currentHeight ?? spacing.xl,
  default: 44,
});

export interface AppScreenHeaderProps {
  title: string;
  headingRef?: Ref<ComponentRef<typeof Text>>;
}

export function AppScreenHeader({ title, headingRef }: AppScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <AppHeading ref={headingRef} title={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerBackground,
    borderBottomColor: colors.border,
    borderBottomWidth: borderWidth.thin,
    paddingBottom: spacing.m,
    paddingHorizontal: spacing.l,
    paddingTop: topInset + spacing.m,
  },
});
