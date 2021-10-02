import React from 'react';
import { FiInfo } from 'react-icons/fi';

import { Container } from './styles';

interface InfoModalProps {
  text?: string | JSX.Element;
}

const InfoModal: React.FC<InfoModalProps> = ({ text }) => {
  return (
    <Container>
      <div className="info-box">
        {text ? (
          <p>{text}</p>
        ) : (
          <p>
            You can get the Vod Id from
            <a
              href="https://twitchtracker.com/xqcow/streams/43911503933"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://twitchtracker.com/xqcow/streams/43911503933
            </a>
          </p>
        )}
      </div>
      <FiInfo size={18} />
    </Container>
  );
};

export default InfoModal;
