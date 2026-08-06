import { StyleSheet, Text, TextInput, View } from 'react-native';

import {
  borderWidth,
  colors,
  fontSize,
  radius,
  spacing,
  touchTarget,
} from '../theme/tokens';

export interface AppSearchFieldProps {
  label: string;
  placeholder: string;
  badge?: string;
  hint?: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
}

export function AppSearchField({
  label,
  placeholder,
  badge,
  hint,
  defaultValue,
  onChangeText,
}: AppSearchFieldProps) {
  return (
    <View style={styles.field}>
      <View
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={styles.caption}
      >
        <Text style={styles.label}>{label}</Text>
        {badge === undefined ? null : <Text style={styles.badge}>({badge})</Text>}
      </View>
      <TextInput
        accessibilityLabel={label}
        accessibilityHint={hint}
        autoCapitalize="none"
        autoCorrect={false}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        returnKeyType="search"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: colors.background,
    borderColor: colors.borderStrong,
    borderRadius: radius.l,
    borderWidth: borderWidth.thin,
    gap: spacing.xs,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m,
  },
  caption: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s,
  },
  label: {
    color: colors.accent,
    fontSize: fontSize.node,
    fontWeight: '700',
  },
  badge: {
    color: colors.textMuted,
    fontSize: fontSize.small,
  },
  input: {
    color: colors.text,
    fontSize: fontSize.body,
    minHeight: touchTarget,
    paddingVertical: spacing.s,
  },
});
