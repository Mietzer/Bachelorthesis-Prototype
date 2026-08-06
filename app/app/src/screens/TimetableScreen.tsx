import type { ListRenderItemInfo } from 'react-native';

import { AppContentList } from '../components/AppContentList';
import { AppTimetableEntry } from '../components/AppTimetableEntry';
import { getTimetableChanges, type TimetableEntry } from '../lib/timetable';

const changes = getTimetableChanges();

function renderEntry({ item, index }: ListRenderItemInfo<TimetableEntry>) {
  return (
    <AppTimetableEntry
      entry={item}
      position={{ index, total: changes.length }}
    />
  );
}

export function TimetableScreen() {
  return (
    <AppContentList
      items={changes}
      keyExtractor={(entry) => entry.id}
      renderItem={renderEntry}
    />
  );
}
