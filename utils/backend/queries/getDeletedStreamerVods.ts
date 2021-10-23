import deletedVods from '@/utils/backend/models/deletedVods';

interface IPlayedGame {
  _id: string;
  name: string;
  image: string;
}

interface IVods {
  url: string;
  date: string;
  length: number;
  playedGames: IPlayedGame[];
}

interface IDeletedVods {
  _id: string;
  streamer: string;
  displayName: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  vods: IVods[];
}

const getDeletedStreamerVods = async (name: string): Promise<IDeletedVods> => {
  const mostWatched = await deletedVods.find({ streamer: name }).sort({
    updatedAt: -1,
  });

  return mostWatched[0] as IDeletedVods;
};

export default getDeletedStreamerVods;
