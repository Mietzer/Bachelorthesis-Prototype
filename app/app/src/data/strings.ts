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
  content?: 'timetableChanges';
}

export const overviewTreeNodes: TreeNodeContent[] = [
  {
    id: 'stundenplan',
    title: 'Stundenplan',
    summary: buildChangeSummary(getTimetableChanges().length),
    content: 'timetableChanges',
  },
  { id: 'raeume', title: 'Räume' },
  { id: 'gebaeude', title: 'Gebäude', summary: '6 Etagen' },
  { id: 'veranstaltungen', title: 'Veranstaltungen' },
  { id: 'aushaenge', title: 'Aushänge' },
  { id: 'einrichtungen', title: 'Barrierefreie Einrichtungen' },
];
