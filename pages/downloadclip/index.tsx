import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios';

import { FiSearch, FiDownload } from 'react-icons/fi';

import api from '@/utils/services/api';

import {
  Container,
  AnimationContainer,
  Thumbnail,
} from '@/styles/DownloadClip';
import LinkBox from '@/components/LinkBox';
import Footer from '@/components/Footer';
import { formatNumber } from '@/components/VodGallery';
import LoadingModal from '@/components/LoadingModal';
import ErrorModal from '@/components/ErrorModal';

interface TwitchVideoProps {
  slug: string;
  tracking_id: string;
  title: string;
  thumbnails: {
    medium: string;
  };
  views: number;
}

const DownloadClip: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview('/DownloadClip');
  }, []);

  const [clip, setClip] = useState('');
  const [twitchData, setTwitchData] = useState<TwitchVideoProps>();
  const [clipLink, setClipLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showHCaptcha, setShowHCaptcha] = useState(true);

  const handleVerificationSuccess = (token: string) => {
    setShowHCaptcha(false);

    axios
      .post('/api/siteverify', {
        token,
      })
      .then(() => {
        console.log('Verification success');
      });

    ReactGA.event({
      category: 'hcaptcha',
      action: 'hcaptcha_resolved',
    });
  };

  const clipSlug = (clipURL: string) => {
    let splittedClip = clipURL.split('/');
    return splittedClip[splittedClip.length - 1];
  };

  const handleSubmit = async () => {
    setError('');

    if (showHCaptcha) {
      setError(`You must validate you're not a robot`);
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.get(`clips/${clipSlug(clip)}`);
      const clipDownloadLink = data.thumbnails.medium.substring(
        0,
        data.thumbnails.medium.indexOf('-preview-'),
      );

      setClipLink(`${clipDownloadLink}.mp4`);
      setTwitchData(data);
      setLoading(false);

      ReactGA.event({
        category: 'DownloadedClip',
        action: `https://clips.twitch.tv/${clipSlug(clip)}`,
      });
    } catch (err) {
      console.warn(err);
      setLoading(false);
      setError('Could not find the clip');
      throw new Error('Could not find the clip');
    }
  };

  return (
    <Container>
      <AnimationContainer>
        <h1>Twitch Clip Downloader</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            name="clip"
            onChange={(event) => setClip(event.target.value)}
            value={clip}
            placeholder="https://clips.twitch.tv/CarefulNiceJaguarRickroll"
            aria-label="DownloadClipInput"
          />
          {showHCaptcha && (
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_TOKEN || ''}
              onVerify={(token: string) => handleVerificationSuccess(token)}
              tabIndex={4}
              theme="dark"
            />
          )}
          <button type="submit" onClick={handleSubmit} aria-label="submit">
            <FiSearch size={14} />
            Download Clip
          </button>
        </form>

        <LinkBox home />
        <LinkBox clips />
        <LinkBox vods />

        {loading && <LoadingModal />}
        {error && <ErrorModal message={error} />}

        {twitchData && (
          <Thumbnail>
            <video src={clipLink} controls={true} />

            <strong>{twitchData.title}</strong>
            <div>
              <p>Views: {formatNumber(twitchData.views)}</p>
              <a href={clipLink} rel="noopener noreferrer">
                <FiDownload size={18} />
                Download
              </a>
            </div>
          </Thumbnail>
        )}
      </AnimationContainer>
      <Footer />
    </Container>
  );
};

export default DownloadClip;
