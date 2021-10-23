export const timeToHMS = (s: number) => {
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;

  return `${h}:${m > 10 ? m : '0' + m}:${s > 10 ? s : '0' + s}`;
};
