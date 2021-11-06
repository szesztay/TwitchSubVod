import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import ReactGA from 'react-ga';
import {
  Container,
  AnimationContainer,
  AvatarsGroupContainer,
  AvatarsGroup,
} from '@/styles/Home';
import LinkBox from '@/components/LinkBox';
import Footer from '@/components/Footer';
import SearchInput from '@/components/SearchInput';
import Avatar from '@/components/Avatar';
import TwitterFeed from '@/components/TwitterFeed';
import api from '@/utils/services/api';
import getLastSearchedDeletedVods from '@/utils/backend/queries/getLastSearchedDeletedVods';
import dbConnect from '@/utils/backend/lib/dbConnect';
import { IUsers } from '..';

interface IStreamers {
  streamers: IUsers[];
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();
  const streamers = await getLastSearchedDeletedVods(16);

  const { data } = await api.get(
    `users?login=${streamers.map((streamer) => streamer.streamer).join(',')}`,
  );

  console.log(
    'GET getLastSearchedDeletedVods fn(getStaticPaths) screen(/deletedvods)',
  );

  return {
    props: {
      streamers: data.users,
    },
    revalidate: 86400, // 1 day
  };
};

const DeletedVods = ({ streamers }: IStreamers) => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview('/');
  }, []);

  return (
    <Container>
      <AnimationContainer>
        <h1>Deleted Vods - PogU</h1>
        <SearchInput isDeleted={true} />

        <LinkBox home />
        <LinkBox clips />
        <LinkBox download />
      </AnimationContainer>

      <h1>Most watched streamers this week</h1>
      <AvatarsGroupContainer>
        <AvatarsGroup>
          {streamers &&
            streamers.map((streamer) => (
              <Avatar
                key={streamer._id}
                streamerName={streamer.display_name}
                name={streamer.name}
                bio={streamer.bio}
                avatar={streamer.logo}
                isDeleted={true}
              />
            ))}
        </AvatarsGroup>
        <TwitterFeed />
      </AvatarsGroupContainer>

      <Footer />
    </Container>
  );
};

export default DeletedVods;
