import { useCallback } from 'react';
import { FlatList, StyleSheet, View, type ListRenderItemInfo } from 'react-native';

import { useScreenFocusAnnounce } from '../a11y/useScreenFocusAnnounce';
import { AppScreenHeader } from '../components/AppScreenHeader';
import { AppSearchField } from '../components/AppSearchField';
import { AppTimetableEntry } from '../components/AppTimetableEntry';
import { AppTreeChildren } from '../components/AppTreeChildren';
import { AppTreeNode } from '../components/AppTreeNode';
import {
  overviewScreen,
  overviewTreeNodes,
  roomSearch,
  type TreeNodeContent,
} from '../data/strings';
import { getTimetableChanges } from '../lib/timetable';
import { useExpandedNodes } from '../lib/useExpandedNodes';
import { colors, spacing } from '../theme/tokens';

const INITIALLY_EXPANDED = ['stundenplan'];

const timetableChanges = getTimetableChanges();

function renderChildren(content: TreeNodeContent['content']) {
  if (content === 'timetableChanges') {
    return timetableChanges.map((entry) => (
      <AppTimetableEntry key={entry.id} entry={entry} />
    ));
  }

  return null;
}

export function OverviewScreen() {
  const headingRef = useScreenFocusAnnounce(overviewScreen.spokenTitle);
  const { expandedIds, isExpanded, toggle } = useExpandedNodes(INITIALLY_EXPANDED);

  const renderNode = useCallback(
    ({ item }: ListRenderItemInfo<TreeNodeContent>) => {
      const expandable = item.content !== undefined;
      const expanded = expandable && isExpanded(item.id);

      return (
        <View>
          <AppTreeNode
            expanded={expanded}
            onToggle={expandable ? () => toggle(item.id) : undefined}
            summary={item.summary}
            title={item.title}
          />
          {expanded ? (
            <AppTreeChildren>{renderChildren(item.content)}</AppTreeChildren>
          ) : null}
        </View>
      );
    },
    [isExpanded, toggle],
  );

  return (
    <View style={styles.screen}>
      <AppScreenHeader headingRef={headingRef} title={overviewScreen.title} />

      <FlatList
        contentContainerStyle={styles.content}
        data={overviewTreeNodes}
        extraData={expandedIds}
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
