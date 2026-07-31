import { StyleSheet, View } from 'react-native';

import { buildRoomLabel, type FloorContent } from '../lib/building';
import { spacing } from '../theme/tokens';
import { AppContentCard } from './AppContentCard';
import { AppExpandableSection } from './AppExpandableSection';
import { AppHeading } from './AppHeading';

export interface AppFloorSectionProps {
  floor: FloorContent;
  expanded: boolean;
  onToggle: () => void;
}

export function AppFloorSection({
  floor,
  expanded,
  onToggle,
}: AppFloorSectionProps) {
  return (
    <AppExpandableSection
      expanded={expanded}
      onToggle={onToggle}
      summary={floor.summary}
      title={floor.title}
    >
      {floor.groups.map((group) => (
        <View key={group.kind} style={styles.group}>
          <AppHeading level={2} title={group.label} />
          {group.rooms.map((room) => (
            <AppContentCard
              accessibilityLabel={buildRoomLabel(room, group.label)}
              detail={room.name}
              key={room.id}
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
