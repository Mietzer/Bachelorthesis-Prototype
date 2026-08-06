export interface ListPosition {
  index: number;
  total: number;
}

export function appendPosition(
  label: string,
  position?: ListPosition,
): string {
  if (position === undefined) {
    return label;
  }

  return `${label}, ${position.index + 1} von ${position.total}`;
}
