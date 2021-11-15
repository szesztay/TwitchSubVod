/**
 * @name removeCorsFromUrl
 * @param {string} url
 * @returns {string}
 * @description
 * Removes the cors url from the url.
 * @example
 * removeCorsFromUrl('https://cors-anywhere.herokuapp.com/https://www.twitch.tv/videos/123456789');
 * // returns 'https://www.twitch.tv/videos/123456789'
 */

export const removeCorsFromUrl = (url: string) => {
  const corsRegex = /https:\/\/(.*)\/https:\/\//;
  const cors = corsRegex.exec(url);

  if (cors) {
    return url.replace(corsRegex, 'https://');
  }

  return url;
};
