import React from 'react';

import * as S from './styles';

const TwitterFeed = ({}) => {
  return (
    <S.TwitterFeedContainer>
      <a
        className="twitter-timeline"
        data-width="250"
        data-height="auto"
        data-dnt="true"
        data-theme="dark"
        href="https://twitter.com/PogULive?ref_src=twsrc%5Etfw"
      >
        Tweets by PogULive
      </a>
    </S.TwitterFeedContainer>
  );
};

export default TwitterFeed;
