import type { ReactElement } from 'react';
import { FlatList, StyleSheet, Text, type ListRenderItem } from 'react-native';

import { emptyCategory } from '../data/strings';
import { colors, fontSize, spacing } from '../theme/tokens';

export interface AppContentListProps<T> {
  items: readonly T[];
  keyExtractor: (item: T) => string;
  renderItem: ListRenderItem<T>;
  header?: ReactElement;
  extraData?: unknown;
}

export function AppContentList<T>({
  items,
  keyExtractor,
  renderItem,
  header,
  extraData,
}: AppContentListProps<T>) {
  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={items}
      extraData={extraData}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<Text style={styles.empty}>{emptyCategory}</Text>}
      ListHeaderComponent={header}
      renderItem={renderItem}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    gap: spacing.m,
    padding: spacing.l,
  },
  empty: {
    color: colors.textMuted,
    fontSize: fontSize.body,
  },
});
