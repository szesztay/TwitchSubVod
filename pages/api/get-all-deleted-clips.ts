import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import connectDB from '@/utils/backend/middleware/mongodb';
import DeletedClips from '@/utils/backend/models/deletedClips';

// test broadcast_id from mr. cow: 43911503933
// test vod id from mr. cow: 1164681386

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { vodId } = req.query;
      let vod: string = '';

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

      if (vod) {
        try {
          const allDeletedClips = await DeletedClips.findOne({ vod });

          console.log('GET /get-all-deleted-clips', allDeletedClips);
          return res.status(200).json({ success: true, data: allDeletedClips });
        } catch (error) {
          console.log('ERROR GET /get-all-deleted-clips', error.message);
          return res.status(500).json({ error: true, message: error.message });
        }
      } else {
        console.log('ERROR GET /get-all-deleted-clips', 'Missing parameters');
        res.status(422).json({ error: true, message: 'Missing parameters' });
      }
      break;

    default:
      res.status(422).json({ error: true, message: 'Method not allowed' });
      break;
  }
};

export default connectDB(handler);
