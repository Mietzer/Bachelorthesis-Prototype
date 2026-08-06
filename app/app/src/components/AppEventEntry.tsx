import {
  buildEventDetail,
  buildEventLabel,
  type CampusEvent,
} from '../lib/campus';
import type { ListPosition } from '../lib/listPosition';
import { AppContentCard } from './AppContentCard';

export interface AppEventEntryProps {
  event: CampusEvent;
  position?: ListPosition;
}

export function AppEventEntry({ event, position }: AppEventEntryProps) {
  return (
    <AppContentCard
      accessibilityLabel={buildEventLabel(event)}
      detail={buildEventDetail(event)}
      position={position}
      title={event.title}
    />
  );
}
