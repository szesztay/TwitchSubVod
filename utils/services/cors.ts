export const cors = () => {
  const corsEnv = process.env.NEXT_PUBLIC_CORS?.split(',') || [];
  const corsEnvEU = process.env.NEXT_PUBLIC_CORS_EU?.split(',') || [];

  const value = Math.random();

  const isInEurope = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.includes('Europe');

  if (isInEurope) {
    return corsEnvEU[Math.floor(value * corsEnvEU.length)];
  }

  return corsEnv[Math.floor(value * corsEnv.length)];
};
