import {
  buildNoticeDetail,
  buildNoticeLabel,
  type Notice,
} from '../lib/campus';
import type { ListPosition } from '../lib/listPosition';
import { AppContentCard } from './AppContentCard';

export interface AppNoticeEntryProps {
  notice: Notice;
  position?: ListPosition;
}

export function AppNoticeEntry({ notice, position }: AppNoticeEntryProps) {
  return (
    <AppContentCard
      accessibilityLabel={buildNoticeLabel(notice)}
      detail={buildNoticeDetail(notice)}
      position={position}
      title={notice.title}
    />
  );
}
