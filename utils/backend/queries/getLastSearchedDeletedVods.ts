import deletedVods from '@/utils/backend/models/deletedVods';
import { sortArray } from '@/utils/sortArray';
import { limitArray } from '@/utils/limitArray';

interface IGetLastSearchedDeletedVods {
  _id: string;
  streamer: string;
}

const getLastSearchedDeletedVods = async (
  limit?: number,
): Promise<IGetLastSearchedDeletedVods[]> => {
  const mostWatchedRanking = await deletedVods.find(
    {},
    { _id: 1, streamer: 1, displayName: 1, logo: 1 },
  );

  const sortedMostWatchedRanking = sortArray(
    mostWatchedRanking,
    'updatedAt',
    'desc',
  );

  const limitedMostWatchedRanking = limitArray(
    sortedMostWatchedRanking,
    limit || 8,
  );

  return limitedMostWatchedRanking;
};

export default getLastSearchedDeletedVods;
