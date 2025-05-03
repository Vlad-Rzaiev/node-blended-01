export const pluralize = (count, one, few, many) => {
  if (count === 1) return one;
  if (count >= 2 && count <= 4) return few;
  return many;
};
