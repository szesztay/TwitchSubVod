export const cors = () => {
  const value = Math.random();

  if (value >= 0.5) {
    return process.env.NEXT_PUBLIC_CORS;
  }

  return process.env.NEXT_PUBLIC_CORS_2;
};
