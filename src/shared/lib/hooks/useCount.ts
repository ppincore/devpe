import { useMemo } from 'react';

export function useCount(elementsCount: number): number[] {
  const totalCount = useMemo(() => {
    const countArray = [];
    for (let i = 0; i < elementsCount; i++) {
      countArray.push(i + 1);
    }
    return countArray;
  }, [elementsCount]);
  return totalCount;
}
