import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import connectDB from '@/utils/backend/middleware/mongodb';
import DeletedClips from '@/utils/backend/models/deletedClips';

// test broadcast_id from mr. cow: 43911503933
// test vod id from mr. cow: 1164681386

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { vodId, start, end } = req.query;
      let urls: Promise<string | void>[] = [];
      let vod: string = '';

      if (Number(end) - Number(start) > 900) {
        res.status(400).json({
          error: 'Requested range is too large',
        });
        return;
      }

      if (vodId.toString().length < 9) {
        res.status(400).json({
          error: 'Vod id is not valid',
        });
        return;
      }

      if (vodId.toString().length === 10) {
        try {
          const { data } = await axios.get(
            `https://api.twitch.tv/kraken/videos/${vodId}`,
            {
              headers: {
                'Client-ID': process.env.NEXT_PUBLIC_TWITCH_TOKEN,
                Accept: 'application/vnd.twitchtv.v5+json',
              },
            },
          );
          vod = data.broadcast_id;
        } catch (err) {
          res.status(400).json({
            error: true,
            message: err.message,
          });
          return;
        }
      } else {
        vod = vodId.toString();
      }

      if (vod && start && end) {
        for (let i = Number(start); i <= Number(end); i++) {
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

            console.log('GET /get-deleted-clips', insertedClips);
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
