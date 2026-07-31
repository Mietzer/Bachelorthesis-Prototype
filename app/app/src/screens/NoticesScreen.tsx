import type { ListRenderItemInfo } from 'react-native';

import { AppContentList } from '../components/AppContentList';
import { AppNoticeEntry } from '../components/AppNoticeEntry';
import { getNotices, type Notice } from '../lib/campus';

const notices = getNotices();

function renderNotice({ item }: ListRenderItemInfo<Notice>) {
  return <AppNoticeEntry notice={item} />;
}

export function NoticesScreen() {
  return (
    <AppContentList
      items={notices}
      keyExtractor={(notice) => notice.id}
      renderItem={renderNotice}
    />
  );
}
