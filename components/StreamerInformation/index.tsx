import Link from 'next/link';
import React from 'react';

import * as S from './styles';

interface IStreamerInformation {
  displayName: string;
  logo: string;
  description: string;
  url: string;
  prefetch?: boolean;
}

const StreamerInformation = ({
  displayName,
  logo,
  description,
  url,
}: IStreamerInformation) => {
  return (
    <Link href={url}>
      <a target="_blank" rel="noopener noreferrer">
        <S.StreamerInformation>
          <div title={description}>
            <img src={logo.replace('300x300', '150x150')} alt={displayName} />
          </div>
          <div>
            <h1>{displayName}</h1>
            <p>{description}</p>
          </div>
        </S.StreamerInformation>
      </a>
    </Link>
  );
};

export default StreamerInformation;
