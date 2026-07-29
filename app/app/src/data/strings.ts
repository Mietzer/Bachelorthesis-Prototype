import {
  buildEventSummary,
  buildNoticeSummary,
  getEvents,
  getNotices,
} from '../lib/campus';
import { buildChangeSummary, getTimetableChanges } from '../lib/timetable';

export const overviewScreen = {
  title: 'HQ-Gebäude · Übersicht',
  spokenTitle: 'HQ-Gebäude, Übersicht',
} as const;

export const roomSearch = {
  label: 'Raumnummer suchen',
  badge: 'Schnellweg',
  hint: 'Schnellweg zu einem Raum, zum Beispiel H Q 4 0 5',
  placeholder: '…',
} as const;

export const treeNodeState = {
  collapsed: 'eingeklappt',
  expanded: 'ausgeklappt',
} as const;

export interface TreeNodeContent {
  id: string;
  title: string;
  summary?: string;
  content?: 'timetableChanges' | 'events' | 'notices';
}

export const overviewTreeNodes: TreeNodeContent[] = [
  {
    id: 'stundenplan',
    title: 'Stundenplan',
    summary: buildChangeSummary(getTimetableChanges().length),
    content: 'timetableChanges',
  },
  {
    id: 'veranstaltungen',
    title: 'Veranstaltungen',
    summary: buildEventSummary(getEvents().length),
    content: 'events',
  },
  {
    id: 'aushaenge',
    title: 'Aushänge',
    summary: buildNoticeSummary(getNotices().length),
    content: 'notices',
  },
  { id: 'raeume', title: 'Räume' },
  { id: 'gebaeude', title: 'Gebäude', summary: '6 Etagen' },
];
