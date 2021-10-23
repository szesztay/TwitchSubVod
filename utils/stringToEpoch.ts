export const stringToEpoch = (date: string) => {
  let epochMs = Math.floor(new Date(date).getTime());
  return epochMs.toString().substring(0, 10);
};
