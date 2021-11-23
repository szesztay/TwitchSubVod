import deletedVods from '@/utils/backend/models/deletedVods';
import { sortArray } from '@/utils/sortArray';

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
  const mostWatched = await deletedVods.find({ streamer: name.toLowerCase() });
  console.log(mostWatched);

  if (mostWatched.length === 0) {
    return {
      _id: '',
      streamer: name,
      displayName: name,
      logo: '',
      createdAt: '',
      updatedAt: '',
      vods: [],
    };
  }

  const sortedMostWatched = sortArray(
    mostWatched[0].vods,
    'updatedAt',
    'desc',
  ) as IVods[];

  return {
    _id: mostWatched[0]._id,
    streamer: mostWatched[0].streamer,
    displayName: mostWatched[0].displayName,
    logo: mostWatched[0].logo,
    createdAt: mostWatched[0].createdAt,
    updatedAt: mostWatched[0].updatedAt,
    vods: sortedMostWatched,
  };
};

export default getDeletedStreamerVods;
