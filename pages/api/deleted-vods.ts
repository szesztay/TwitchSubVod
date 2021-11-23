import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { convertStringObjectArray } from '@/utils/convertStringObjectArray';
import { searchDeletedVod } from '@/utils/searchDeletedVod';
import connectDB from '@/utils/backend/middleware/mongodb';
import DeletedVods from '@/utils/backend/models/deletedVods';

interface IAllVods {
  length: number;
  gamesplayed: string;
  channeldisplayname: string;
  channellogo: string;
  channelurl: string;
  startDateTime: string;
  streamId: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, range } = req.query;

  res.setHeader('Cache-Control', 'public, max-age=86400');

  try {
    const { data } = await axios.get(
      `${process.env.DELETED_VODS_HOST}${username}`,
    );

    const parsedData = JSON.parse(
      data
        .split('<script type="text/javascript">')[3]
        .split(`\r\n        var PageInfo = `)[1]
        .split(`\r\n        var PageData = `)[0]
        .replace(/\;/g, ''),
    );

    const allVodsResponse = await axios.get(
      `${process.env.DELETED_VODS}${range || 7}/${parsedData.id}${
        process.env.DELETED_VODS_PARAMS
      }`,
    );

    const allVods: IAllVods[] = allVodsResponse.data.data;

    if (!allVods.length) {
      throw new Error('No vods found');
    }

    const streamerObject = {
      displayName: allVods[0].channeldisplayname,
      name: allVods[0].channelurl,
      logo: allVods[0].channellogo,
    };

    const streamObject = allVods.map(async (vod) => {
      const vodUrl = searchDeletedVod({
        streamerName: vod.channelurl,
        vodDate: vod.startDateTime,
        vodId: vod.streamId,
      });

      if (!(await vodUrl)) {
        return null;
      }

      return {
        vod: vod.streamId,
        url: (await vodUrl) || null,
        date: vod.startDateTime,
        length: vod.length,
        playedGames: convertStringObjectArray(vod.gamesplayed),
      };
    });

    const streamsWithNull = await Promise.all(streamObject);

    const streams = streamsWithNull.filter(
      (stream) => stream !== null && stream !== undefined,
    );

    if (!streams.length) {
      throw new Error('No vods found');
    }

    const deletedVods = await DeletedVods.findOneAndUpdate(
      { streamer: streamerObject.name.toLowerCase() },
      {
        streamer: streamerObject.name.toLowerCase(),
        displayName: streamerObject.displayName,
        logo: streamerObject.logo,
        $addToSet: {
          vods: streams,
        },
      },
      { upsert: true, new: true },
    );

    res.status(200).json({ data: deletedVods });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

export default connectDB(handler);
