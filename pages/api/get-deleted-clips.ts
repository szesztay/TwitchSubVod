import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import connectDB from '@/utils/backend/middleware/mongodb';
import DeletedClips from '@/utils/backend/models/deletedClips';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // test vod: 43911503933
  switch (req.method) {
    case 'GET':
      const { vod, start, end } = req.query;
      let urls: Promise<string | void>[] = [];

      if (vod && start && end) {
        for (let i = Number(start); i <= Number(end); i++) {
          // console.log(loopNumber);
          let url = `https://clips-media-assets2.twitch.tv/${vod}-offset-${i}.mp4`;
          const data = axios
            .head(url)
            .then(() => {
              return url;
            })
            .catch(() => {
              return;
            });

          urls.push(data);
        }

        const result = await Promise.all(urls);
        const filteredResult = result.filter(Boolean);

        if (filteredResult.length > 0) {
          try {
            const insertedClips = await DeletedClips.findOneAndUpdate(
              { vod },
              {
                vod: vod,
                $addToSet: {
                  clips: filteredResult,
                  searchedZones: [{ start: Number(start), end: Number(end) }],
                },
              },
              { upsert: true, new: true },
            );

            console.log(insertedClips);
          } catch (err) {
            console.log(err.message);
          }
        }

        try {
          return res.status(200).json({ success: true, clips: filteredResult });
        } catch (error) {
          console.log('ERROR GET /get-deleted-clips', error.message);
          return res.status(500).json({ error: true, message: error.message });
        }
      } else {
        console.log('ERROR GET /get-deleted-clips', 'Missing parameters');
        res.status(422).json({ error: true, message: 'Missing parameters' });
      }
      break;

    default:
      res.status(422).json({ error: true, message: 'Method not allowed' });
      break;
  }
};

export default connectDB(handler);
