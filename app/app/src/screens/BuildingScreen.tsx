import { useCallback } from 'react';
import type { ListRenderItemInfo } from 'react-native';

import { AppContentList } from '../components/AppContentList';
import { AppFloorSection } from '../components/AppFloorSection';
import { AppSearchField } from '../components/AppSearchField';
import { roomSearch } from '../data/strings';
import { getBuilding, type FloorContent } from '../lib/building';
import { useExpandedNodes } from '../lib/useExpandedNodes';

const floors = getBuilding();

export function BuildingScreen() {
  const { expandedIds, isExpanded, toggle } = useExpandedNodes();

  const renderFloor = useCallback(
    ({ item }: ListRenderItemInfo<FloorContent>) => (
      <AppFloorSection
        expanded={isExpanded(item.id)}
        floor={item}
        onToggle={() => toggle(item.id)}
      />
    ),
    [isExpanded, toggle],
  );

  return (
    <AppContentList
      extraData={expandedIds}
      header={
        <AppSearchField
          badge={roomSearch.badge}
          hint={roomSearch.hint}
          label={roomSearch.label}
          placeholder={roomSearch.placeholder}
        />
      }
      items={floors}
      keyExtractor={(floor) => floor.id}
      renderItem={renderFloor}
    />
  );
}
