import { buildFloorSummary, getBuilding } from '../lib/building';
import {
  buildEventSummary,
  buildNoticeSummary,
  getEvents,
  getNotices,
} from '../lib/campus';
import { buildChangeSummary, getTimetableChanges } from '../lib/timetable';

export const appLocation = 'HQ-Gebäude';

export function buildScreenTitle(tabTitle: string): string {
  return `${appLocation} · ${tabTitle}`;
}

export function buildSpokenTitle(tabTitle: string): string {
  return `${appLocation}, ${tabTitle}`;
}

export const roomSearch = {
  label: 'Raum suchen',
  badge: 'Schnellweg',
  hint: 'Sucht einen Raum im Gebäude, nach Nummer oder Name',
  placeholder: '…',
  cleared: 'Suche geleert, alle Etagen',
} as const;

export const emptyCategory = 'Für diesen Bereich sind noch keine Daten hinterlegt.';

export interface NavigationTab {
  id: string;
  title: string;
  barTitle?: string;
  summary?: string;
  content: 'timetable' | 'events' | 'notices' | 'building';
}

export const navigationTabs: [NavigationTab, ...NavigationTab[]] = [
  {
    id: 'stundenplan',
    title: 'Stundenplan',
    summary: buildChangeSummary(getTimetableChanges().length),
    content: 'timetable',
  },
  {
    id: 'veranstaltungen',
    title: 'Veranstaltungen',
    barTitle: 'Veranstal\u200Btungen',
    summary: buildEventSummary(getEvents().length),
    content: 'events',
  },
  {
    id: 'aushaenge',
    title: 'Aushänge',
    summary: buildNoticeSummary(getNotices().length),
    content: 'notices',
  },
  {
    id: 'gebaeude',
    title: 'Gebäude',
    summary: buildFloorSummary(getBuilding().length),
    content: 'building',
  },
];
