export const swap = <T>(array: T[], index1: number | null, index2: number | null): T[] => {
  if (
    index1 === null || index1 < 0 || index1 >= array.length ||
    index2 === null || index2 < 0 || index2 >= array.length ||
    index1 === index2
  ) return array;

  const updated = [...array];
  [updated[index1], updated[index2]] = [updated[index2], updated[index1]];
  return updated;
};
