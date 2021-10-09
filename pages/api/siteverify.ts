import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const secret = process.env.NEXT_SECRET_HCAPTCHA_SERVER_TOKEN as string;
const url = 'https://hcaptcha.com/siteverify';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;

  const form = new URLSearchParams();
  if (token) {
    form.append('response', token);
  }

  if (secret) {
    form.append('secret', secret);
  }

  try {
    const response = await axios.post(url, form, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.status(200).json(response.data);
  } catch (e) {
    res.status(400).json({ error: true, message: 'Something went wrong' });
  }
};

export default handler;
