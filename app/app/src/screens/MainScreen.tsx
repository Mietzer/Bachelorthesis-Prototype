import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useScreenFocusAnnounce } from '../a11y/useScreenFocusAnnounce';
import { AppScreenHeader } from '../components/AppScreenHeader';
import { AppTabBar } from '../components/AppTabBar';
import {
  buildScreenTitle,
  buildSpokenTitle,
  navigationTabs,
  type NavigationTab,
} from '../data/strings';
import { colors } from '../theme/tokens';
import { BuildingScreen } from './BuildingScreen';
import { EventsScreen } from './EventsScreen';
import { NoticesScreen } from './NoticesScreen';
import { TimetableScreen } from './TimetableScreen';

function renderArea(content: NavigationTab['content']) {
  switch (content) {
    case 'timetable':
      return <TimetableScreen />;
    case 'events':
      return <EventsScreen />;
    case 'notices':
      return <NoticesScreen />;
    case 'building':
      return <BuildingScreen />;
  }
}

export function MainScreen() {
  const [activeId, setActiveId] = useState(navigationTabs[0].id);

  const activeTab =
    navigationTabs.find((tab) => tab.id === activeId) ?? navigationTabs[0];

  const headingRef = useScreenFocusAnnounce(buildSpokenTitle(activeTab.title));

  return (
    <View style={styles.screen}>
      <AppScreenHeader
        headingRef={headingRef}
        subtitle={activeTab.summary}
        title={buildScreenTitle(activeTab.title)}
      />

      {renderArea(activeTab.content)}

      <AppTabBar
        activeId={activeTab.id}
        onSelect={setActiveId}
        tabs={navigationTabs}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
