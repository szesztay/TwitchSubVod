import React, { useRef, useMemo, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ReactGA from 'react-ga';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import axios from 'axios';

import { useGlobal } from '@/stores/GlobalContext';
import { Container, HCaptchaContainer, CustomOptions } from './styles';
import { removeCorsFromUrl } from '@/utils/removeCorsFromUrl';

interface IVodModal {
  videoUrl: string;
  previewUrl?: string;
}

const VodModal = ({ videoUrl, previewUrl }: IVodModal) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const playerRef: any = useRef(null);

  const { videoQuality } = useGlobal();
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
      label: 'sub_only',
    });
  };

  const downloadClip = () => {
    const currentTime = playerRef?.current?.getCurrentTime() || 0;

    const clippedPart = Math.floor(currentTime / 10);

    const clippedUrl = removeCorsFromUrl(
      videoUrl.replace('index-dvr.m3u8', `${clippedPart}.ts`),
    );

    const link = document.createElement('a');
    link.href = clippedUrl;
    link.setAttribute('download', 'clip');
    document.body.appendChild(link);
    link.click();
  };

  const showCustomPlayer =
    /^iP/.test(navigator.platform) ||
    (/^Mac/.test(navigator.platform) && navigator.maxTouchPoints > 4);

  const isSafari = () => {
    return navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
  };

  const renderVodModal = useMemo(() => {
    return (
      <>
        <HCaptchaContainer isVisible={showHCaptcha}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-adtest={process.env.NODE_ENV === 'development' ? 'on' : 'off'}
            data-ad-client="ca-pub-8414071548156466"
            data-ad-slot="7024046142"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_TOKEN || ''}
            onVerify={(token: string) => handleVerificationSuccess(token)}
            tabIndex={4}
          />
        </HCaptchaContainer>

        {showCustomPlayer ? (
          <>
            <Player
              playsInline
              poster={previewUrl || ''}
              src={removeCorsFromUrl(videoUrl)}
            />
          </>
        ) : (
          <>
            <CustomOptions isSafari={isSafari()}>
              <select
                defaultValue="1"
                onChange={(e) => setPlaybackRate(Number(e.target.value))}
              >
                <option value="0.25">Speed 0.25x</option>
                <option value="0.5">Speed 0.5x</option>
                <option value="0.75">Speed 0.75x</option>
                <option value="1">Speed 1x</option>
                <option value="1.25">Speed 1.25x</option>
                <option value="1.5">Speed 1.5x</option>
                <option value="1.75">Speed 1.75x</option>
                <option value="2">Speed 2x</option>
              </select>

              <button onClick={downloadClip}>
                Clip it{' '}
                <img
                  title="LUL"
                  src="https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/3.0"
                />
              </button>
            </CustomOptions>

            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              playbackRate={playbackRate}
              config={{
                file: {
                  hlsOptions: {
                    xhrSetup: (xhr: any, _url: string) => {
                      xhr.open(
                        'GET',
                        _url
                          .replace('unmuted.ts', 'muted.ts')
                          .replace('chunked', videoQuality),
                        true,
                      );
                    },
                  },
                },
              }}
            />
          </>
        )}
      </>
    );
  }, [
    videoUrl,
    showHCaptcha,
    setShowHCaptcha,
    videoQuality,
    setPlaybackRate,
    playbackRate,
    downloadClip,
  ]);

  return <Container>{renderVodModal}</Container>;
};

export default VodModal;
