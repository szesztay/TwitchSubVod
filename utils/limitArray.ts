export const limitArray = (array: any[], limit: number, offset?: number) => {
  return array.slice(offset || 0, limit);
};
