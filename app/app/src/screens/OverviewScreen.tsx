import { FlatList, StyleSheet, View, type ListRenderItemInfo } from 'react-native';

import { useScreenFocusAnnounce } from '../a11y/useScreenFocusAnnounce';
import { AppScreenHeader } from '../components/AppScreenHeader';
import { AppSearchField } from '../components/AppSearchField';
import { AppTreeNode } from '../components/AppTreeNode';
import {
  overviewScreen,
  overviewTreeNodes,
  roomSearch,
  type TreeNodeContent,
} from '../data/strings';
import { colors, spacing } from '../theme/tokens';

function renderNode({ item }: ListRenderItemInfo<TreeNodeContent>) {
  return (
    <AppTreeNode title={item.title} summary={item.summary} expanded={false} />
  );
}

export function OverviewScreen() {
  const headingRef = useScreenFocusAnnounce(overviewScreen.spokenTitle);

  return (
    <View style={styles.screen}>
      <AppScreenHeader headingRef={headingRef} title={overviewScreen.title} />

      <FlatList
        contentContainerStyle={styles.content}
        data={overviewTreeNodes}
        keyExtractor={(node) => node.id}
        ListHeaderComponent={
          <AppSearchField
            badge={roomSearch.badge}
            hint={roomSearch.hint}
            label={roomSearch.label}
            placeholder={roomSearch.placeholder}
          />
        }
        renderItem={renderNode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    gap: spacing.m,
    padding: spacing.l,
  },
});
