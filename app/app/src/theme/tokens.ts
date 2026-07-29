export const colors = {
  background: '#ffffff',
  surface: '#eef1f5',
  surfacePressed: '#dfe5ec',
  headerBackground: '#1b3a5e',
  headerText: '#ffffff',
  border: '#c9d2dc',
  borderStrong: '#8e9aa6',
  text: '#16202c',
  textMuted: '#5b6875',
  accent: '#1b3a5e',
  statusChanged: '#b5231d',
} as const;

export const spacing = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
} as const;

export const fontSize = {
  title: 22,
  node: 19,
  body: 17,
  small: 15,
} as const;

export const radius = {
  s: 4,
  m: 8,
  l: 12,
} as const;

export const borderWidth = {
  thin: 1,
  thick: 2,
} as const;

export const touchTarget = 48;

export const indent = spacing.m;
