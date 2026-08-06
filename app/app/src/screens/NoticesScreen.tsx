import type { ListRenderItemInfo } from 'react-native';

import { AppContentList } from '../components/AppContentList';
import { AppNoticeEntry } from '../components/AppNoticeEntry';
import { getNotices, type Notice } from '../lib/campus';

const notices = getNotices();

function renderNotice({ item, index }: ListRenderItemInfo<Notice>) {
  return (
    <AppNoticeEntry notice={item} position={{ index, total: notices.length }} />
  );
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
