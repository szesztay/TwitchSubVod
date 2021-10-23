import deletedVods from '@/utils/backend/models/deletedVods';

interface IGetLastSearchedDeletedVods {
  _id: string;
  streamer: string;
}

const getLastSearchedDeletedVods = async (
  limit?: number,
): Promise<IGetLastSearchedDeletedVods[]> => {
  const mostWatchedRanking = await deletedVods
    .find({}, { _id: 1, streamer: 1, displayName: 1, logo: 1 })
    .sort({ updatedAt: -1 })
    .limit(limit || 8);

  return mostWatchedRanking;
};

export default getLastSearchedDeletedVods;
