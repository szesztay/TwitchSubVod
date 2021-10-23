import axios from 'axios';
import { createHash } from 'crypto';
import { stringToEpoch } from './stringToEpoch';

export interface ISearchDeletedVod {
  streamerName: string;
  vodId: number;
  vodDate: string;
}

export const searchDeletedVod = async ({
  streamerName,
  vodId,
  vodDate,
}: ISearchDeletedVod): Promise<string> => {
  let link = '';
  const hosts = [
    'https://d1m7jfoe9zdc1j.cloudfront.net',
    'https://vod-secure.twitch.tv',
    'https://dgeft87wbj63p.cloudfront.net',
    'https://d2e2de1etea730.cloudfront.net',
    'https://vod-metro.twitch.tv',
    'https://d2nvs31859zcd8.cloudfront.net',
    'https://vod-pop-secure.twitch.tv',
  ];

  const epochTime = Number(stringToEpoch(vodDate));
  const splitString = `${streamerName.toLowerCase()}_${vodId}_${epochTime}`;

  const sha1String = createHash('sha1')
    .update(splitString)
    .digest('hex')
    .substring(0, 20);

  const fullLinks = hosts.map(
    (host) => `${host}/${sha1String}_${splitString}/chunked/index-dvr.m3u8`,
  );

  for (const fullLink of fullLinks) {
    try {
      const data = await axios.head(fullLink);
      console.log(data.status + ' | ' + fullLink);
      if (data.status === 200 || data.status === 304) {
        link = fullLink;
        break;
      }
    } catch (err) {}
  }

  return link;
};
