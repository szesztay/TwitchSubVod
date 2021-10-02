import React, { useCallback, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';

import { FiSearch } from 'react-icons/fi';

import { Container, AnimationContainer } from '@/styles/DeletedClips';
import LinkBox from '@/components/LinkBox';
import InfoModal from '@/components/InfoModal';
import Footer from '@/components/Footer';
import ErrorModal from '@/components/ErrorModal';
import LoadingModal from '@/components/LoadingModal';
import Slider from '@/components/Slider';

interface IDeletedClipsData {
  clips: string[];
  searchedZones: Array<{
    start: number;
    end: number;
  }>;
  vod: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

const DeletedClips: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview('/DeletedClips');
  }, []);

  const [vodId, setVodId] = useState('');
  const [
    deletedClipsData,
    setDeletedClipsData,
  ] = useState<IDeletedClipsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sliderValue, setSliderValue] = useState<readonly number[]>([7, 15]);
  const [domain, setDomain] = useState<number[]>([0, 30]);
  const [shouldShowRange, setShouldShowRange] = useState(false);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      // setShouldShowRange((search) => !search);

      const { data } = await axios.get(
        `/api/get-all-deleted-clips?vodId=${vodId}`,
      );
      setDeletedClipsData(data.data);
    } catch (err) {
      setError(err.response.data.message);
      if (err.response.status === 404) {
        setShouldShowRange(true);
      }
    } finally {
      setLoading(false);
    }
  }, [setDeletedClipsData, vodId, setLoading, setError, setShouldShowRange]);

  const handleDomain = useCallback(
    (direction: string) => {
      if (direction === 'left' && domain[0] >= 5) {
        setDomain([domain[0] - 5, domain[1] - 5]);
      }
      if (direction === 'right') {
        setDomain([domain[0] + 5, domain[1] + 5]);
      }

      return;
    },
    [setDomain, domain],
  );

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

          {shouldShowRange && (
            <div className="time-container">
              <Slider
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                domain={domain}
              />
              <div className="time-buttons">
                <button
                  onClick={() => handleDomain('left')}
                  aria-label="go left"
                  title="go left"
                >
                  👈
                </button>
                <button
                  onClick={() => handleDomain('right')}
                  aria-label="go right"
                  title="go right"
                >
                  👉
                </button>
              </div>

              <p>You can only search a range smaller than 15 minutes</p>
            </div>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            aria-label="submit"
            disabled={!vodId?.length}
          >
            <FiSearch size={14} />
            Search
          </button>
        </form>

        <LinkBox home />

        {loading && <LoadingModal />}

        {!!error?.length && <ErrorModal message={error} />}

        {!!deletedClipsData?.clips?.length && (
          <>
            {deletedClipsData?.clips?.map((clip) => (
              <div className="video-container" key={clip}>
                <ReactPlayer
                  key={clip}
                  url={clip}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </>
        )}
      </AnimationContainer>
      <Footer />
    </Container>
  );
};

export default DeletedClips;
