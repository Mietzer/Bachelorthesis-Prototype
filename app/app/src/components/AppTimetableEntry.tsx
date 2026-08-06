import {
  buildEntryDetail,
  buildEntryLabel,
  buildStatusBadge,
  type TimetableEntry,
} from '../lib/timetable';
import type { ListPosition } from '../lib/listPosition';
import { AppContentCard } from './AppContentCard';

export interface AppTimetableEntryProps {
  entry: TimetableEntry;
  position?: ListPosition;
}

export function AppTimetableEntry({
  entry,
  position,
}: AppTimetableEntryProps) {
  return (
    <AppContentCard
      accessibilityLabel={buildEntryLabel(entry)}
      badge={buildStatusBadge(entry)}
      detail={buildEntryDetail(entry)}
      position={position}
      title={entry.title}
    />
  );
}
