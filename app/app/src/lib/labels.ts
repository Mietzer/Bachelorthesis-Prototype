export interface TreeNodeLabelInput {
  title: string;
  summary?: string;
  level: number;
}

export function buildTreeNodeLabel({
  title,
  summary,
  level,
}: TreeNodeLabelInput): string {
  const parts = [title];

  if (summary !== undefined) {
    parts.push(summary);
  }

  if (level > 1) {
    parts.push(`Ebene ${level}`);
  }

  return parts.join(', ');
}
