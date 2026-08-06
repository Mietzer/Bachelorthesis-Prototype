import { StyleSheet, View } from 'react-native';

import { buildRoomLabel, type FloorContent } from '../lib/building';
import type { ListPosition } from '../lib/listPosition';
import { spacing } from '../theme/tokens';
import { AppContentCard } from './AppContentCard';
import { AppExpandableSection } from './AppExpandableSection';
import { AppHeading } from './AppHeading';

export interface AppFloorSectionProps {
  floor: FloorContent;
  expanded: boolean;
  onToggle: () => void;
  position?: ListPosition;
}

function withOffsets(floor: FloorContent) {
  let offset = 0;

  return floor.groups.map((group) => {
    const start = offset;
    offset += group.rooms.length;

    return { ...group, start };
  });
}

export function AppFloorSection({
  floor,
  expanded,
  onToggle,
  position,
}: AppFloorSectionProps) {
  const groups = withOffsets(floor);

  return (
    <AppExpandableSection
      expanded={expanded}
      onToggle={onToggle}
      position={position}
      summary={floor.summary}
      title={floor.title}
    >
      {groups.map((group) => (
        <View key={group.kind} style={styles.group}>
          <AppHeading level={2} title={group.label} />
          {group.rooms.map((room, index) => (
            <AppContentCard
              accessibilityLabel={buildRoomLabel(room, group.label)}
              detail={room.name}
              key={room.id}
              position={{ index: group.start + index, total: floor.roomCount }}
              title={room.code}
            />
          ))}
        </View>
      ))}
    </AppExpandableSection>
  );
}

const styles = StyleSheet.create({
  group: {
    gap: spacing.s,
  },
});
