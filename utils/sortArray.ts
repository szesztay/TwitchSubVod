export const sortArray = (
  array: any[],
  sortBy: string,
  sortOrder: 'asc' | 'desc',
) => {
  return array.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
};
