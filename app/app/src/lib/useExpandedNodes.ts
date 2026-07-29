import { useCallback, useState } from 'react';

export interface ExpandedNodes {
  expandedIds: ReadonlySet<string>;
  isExpanded: (id: string) => boolean;
  toggle: (id: string) => void;
}

export function useExpandedNodes(
  initiallyExpanded: readonly string[] = [],
): ExpandedNodes {
  const [expandedIds, setExpandedIds] = useState<ReadonlySet<string>>(
    () => new Set(initiallyExpanded),
  );

  const toggle = useCallback((id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);

      if (!next.delete(id)) {
        next.add(id);
      }

      return next;
    });
  }, []);

  const isExpanded = useCallback(
    (id: string) => expandedIds.has(id),
    [expandedIds],
  );

  return { expandedIds, isExpanded, toggle };
}
