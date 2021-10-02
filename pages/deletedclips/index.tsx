import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import ReactPlayer from 'react-player';

import { FiSearch } from 'react-icons/fi';

import { Container, AnimationContainer } from '@/styles/DeletedClips';
import LinkBox from '@/components/LinkBox';
import InfoModal from '@/components/InfoModal';
import Footer from '@/components/Footer';
import ErrorModal from '@/components/ErrorModal';
import LoadingModal from '@/components/LoadingModal';
import Slider from '@/components/Slider';

const DeletedClips: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview('/DeletedClips');
  }, []);

  const [vodId, setVodId] = useState('');
  const [data, setData] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sliderValue, setSliderValue] = useState<readonly number[]>([7, 15]);
  const [domain, setDomain] = useState<number[]>([0, 30]);

  const handleSubmit = () => {
    try {
      setLoading(true);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDomain = (direction: string) => {
    if (domain[0] <= 0 && direction === 'left') {
      return;
    }

    if (direction === 'left') {
      setDomain([domain[0] - 5, domain[1] - 5]);
    }
    if (direction === 'right') {
      setDomain([domain[0] + 5, domain[1] + 5]);
    }
  };

  return (
    <Container>
      <AnimationContainer>
        <h1>Deleted Twitch Clips</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="input-box">
            <input
              type="number"
              name="vodId"
              onChange={(event) => setVodId(event.target.value)}
              value={vodId}
              placeholder="Vod ID"
            />
            <InfoModal
              text={
                <>
                  <p>Vod ID is the numbers in twitch.tv/videos/123123</p>
                  <p>
                    Or you can get the Vod ID from
                    <a
                      href="https://twitchtracker.com/xqcow/streams/43911503933"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://twitchtracker.com/xqcow/streams/43911503933
                    </a>
                  </p>
                </>
              }
            />
          </div>
          <div className="time-container">
            <Slider
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              domain={domain}
            />
            <div className="time-buttons">
              <button onClick={() => handleDomain('left')}>👈</button>
              <button onClick={() => handleDomain('right')}>👉</button>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit} aria-label="submit">
            <FiSearch size={14} />
            Search
          </button>
        </form>

        <LinkBox home />

        {loading && <LoadingModal />}

        {!!error.length && <ErrorModal message={error} />}

        {/* {data && (
          <>
            {data.map((item) => (
              <div className="video-container" key={item}>
                <ReactPlayer
                  key={item}
                  url={item}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </>
        )} */}
      </AnimationContainer>
      <Footer />
    </Container>
  );
};

export default DeletedClips;
