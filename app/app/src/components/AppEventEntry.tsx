import {
  buildEventDetail,
  buildEventLabel,
  type CampusEvent,
} from '../lib/campus';
import { AppContentCard } from './AppContentCard';

export interface AppEventEntryProps {
  event: CampusEvent;
}

export function AppEventEntry({ event }: AppEventEntryProps) {
  return (
    <AppContentCard
      accessibilityLabel={buildEventLabel(event)}
      detail={buildEventDetail(event)}
      title={event.title}
    />
  );
}
