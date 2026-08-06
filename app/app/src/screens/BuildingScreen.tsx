import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Platform,
  StyleSheet,
  Text,
  View,
  type ListRenderItemInfo,
} from 'react-native';

import { AppContentCard } from '../components/AppContentCard';
import { AppContentList } from '../components/AppContentList';
import { AppFloorSection } from '../components/AppFloorSection';
import { AppSearchField } from '../components/AppSearchField';
import { roomSearch } from '../data/strings';
import {
  buildResultSummary,
  getBuilding,
  searchRooms,
  type FloorContent,
  type RoomResult,
} from '../lib/building';
import { useExpandedNodes } from '../lib/useExpandedNodes';
import { colors, fontSize, spacing } from '../theme/tokens';

type BuildingItem =
  | { kind: 'floor'; id: string; floor: FloorContent }
  | { kind: 'room'; id: string; room: RoomResult };

const ANNOUNCE_DELAY_MS = 400;

const floorItems: BuildingItem[] = getBuilding().map((floor) => ({
  kind: 'floor',
  id: floor.id,
  floor,
}));

export function BuildingScreen() {
  const [query, setQuery] = useState('');
  const { expandedIds, isExpanded, toggle } = useExpandedNodes();

  const results = useMemo(() => searchRooms(query), [query]);
  const searching = query.trim() !== '';

  const items: BuildingItem[] = searching
    ? results.map((room) => ({ kind: 'room', id: room.id, room }))
    : floorItems;

  const total = items.length;

  const status = searching
    ? buildResultSummary(results.length)
    : roomSearch.cleared;

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (Platform.OS === 'android' && searching) {
      return;
    }

    const timer = setTimeout(() => {
      AccessibilityInfo.announceForAccessibility(status);
    }, ANNOUNCE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [searching, status]);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<BuildingItem>) => {
      const position = { index, total };

      if (item.kind === 'room') {
        return (
          <AppContentCard
            accessibilityLabel={item.room.label}
            detail={item.room.detail}
            position={position}
            title={item.room.code}
          />
        );
      }

      return (
        <AppFloorSection
          expanded={isExpanded(item.id)}
          floor={item.floor}
          onToggle={() => toggle(item.id)}
          position={position}
        />
      );
    },
    [isExpanded, toggle, total],
  );

  return (
    <AppContentList
      emptyText={searching ? null : undefined}
      extraData={expandedIds}
      header={
        <View style={styles.header}>
          <AppSearchField
            badge={roomSearch.badge}
            hint={roomSearch.hint}
            label={roomSearch.label}
            onChangeText={setQuery}
            placeholder={roomSearch.placeholder}
          />
          {searching ? (
            <Text accessibilityLiveRegion="polite" style={styles.summary}>
              {status}
            </Text>
          ) : null}
        </View>
      }
      items={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.m,
  },
  summary: {
    color: colors.textMuted,
    fontSize: fontSize.body,
  },
});
