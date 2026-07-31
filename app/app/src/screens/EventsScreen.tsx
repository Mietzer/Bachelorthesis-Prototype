import type { ListRenderItemInfo } from 'react-native';

import { AppContentList } from '../components/AppContentList';
import { AppEventEntry } from '../components/AppEventEntry';
import { getEvents, type CampusEvent } from '../lib/campus';

const events = getEvents();

function renderEvent({ item }: ListRenderItemInfo<CampusEvent>) {
  return <AppEventEntry event={item} />;
}

export function EventsScreen() {
  return (
    <AppContentList
      items={events}
      keyExtractor={(event) => event.id}
      renderItem={renderEvent}
    />
  );
}
