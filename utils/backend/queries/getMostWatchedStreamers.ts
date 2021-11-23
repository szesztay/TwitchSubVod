import mostWatchedStreamers from '@/utils/backend/models/mostWatchedStreamers';
import { sortArray } from '@/utils/sortArray';
import { limitArray } from '@/utils/limitArray';

interface IGetMostWatchedStreamers {
  _id: string;
  streamer: string;
}

const getMostWatchedStreamers = async (
  limit?: number,
  offset?: number,
): Promise<IGetMostWatchedStreamers[]> => {
  const mostWatchedRanking = await mostWatchedStreamers.find(
    {},
    { _id: 1, streamer: 1, count: 1 },
  );

  const sortedMostWatchedRanking = sortArray(
    mostWatchedRanking,
    'count',
    'desc',
  );

  const limitedMostWatchedRanking = limitArray(
    sortedMostWatchedRanking,
    limit || 8,
    offset || 0,
  );

  return limitedMostWatchedRanking;
};

export default getMostWatchedStreamers;
