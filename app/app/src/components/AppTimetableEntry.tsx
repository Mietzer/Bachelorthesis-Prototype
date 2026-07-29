import {
  buildEntryDetail,
  buildEntryLabel,
  buildStatusBadge,
  type TimetableEntry,
} from '../lib/timetable';
import { AppContentCard } from './AppContentCard';

export interface AppTimetableEntryProps {
  entry: TimetableEntry;
}

export function AppTimetableEntry({ entry }: AppTimetableEntryProps) {
  return (
    <AppContentCard
      accessibilityLabel={buildEntryLabel(entry)}
      badge={buildStatusBadge(entry)}
      detail={buildEntryDetail(entry)}
      title={entry.title}
    />
  );
}
