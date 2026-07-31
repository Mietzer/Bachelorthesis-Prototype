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
  label: 'Raumnummer suchen',
  badge: 'Schnellweg',
  hint: 'Schnellweg zu einem Raum, zum Beispiel H Q 4 0 5',
  placeholder: '…',
} as const;

export const emptyCategory = 'Für diesen Bereich sind noch keine Daten hinterlegt.';

export interface NavigationTab {
  id: string;
  title: string;
  shortTitle: string;
  summary?: string;
  /** Welcher Bereich den Inhalt des Reiters anzeigt. */
  content: 'timetable' | 'events' | 'notices' | 'building';
}

export const navigationTabs: [NavigationTab, ...NavigationTab[]] = [
  {
    id: 'stundenplan',
    title: 'Stundenplan',
    shortTitle: 'Stundenplan',
    summary: buildChangeSummary(getTimetableChanges().length),
    content: 'timetable',
  },
  {
    id: 'veranstaltungen',
    title: 'Veranstaltungen',
    shortTitle: 'Termine',
    summary: buildEventSummary(getEvents().length),
    content: 'events',
  },
  {
    id: 'aushaenge',
    title: 'Aushänge',
    shortTitle: 'Aushänge',
    summary: buildNoticeSummary(getNotices().length),
    content: 'notices',
  },
  {
    id: 'gebaeude',
    title: 'Gebäude',
    shortTitle: 'Gebäude',
    summary: buildFloorSummary(getBuilding().length),
    content: 'building',
  },
];
