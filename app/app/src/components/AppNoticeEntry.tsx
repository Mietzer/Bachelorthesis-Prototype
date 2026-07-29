import {
  buildNoticeDetail,
  buildNoticeLabel,
  type Notice,
} from '../lib/campus';
import { AppContentCard } from './AppContentCard';

export interface AppNoticeEntryProps {
  notice: Notice;
}

export function AppNoticeEntry({ notice }: AppNoticeEntryProps) {
  return (
    <AppContentCard
      accessibilityLabel={buildNoticeLabel(notice)}
      detail={buildNoticeDetail(notice)}
      title={notice.title}
    />
  );
}
