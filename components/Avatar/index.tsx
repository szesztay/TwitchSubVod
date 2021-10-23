import React from 'react';

import {
  Link,
  AvatarContainer,
  StreamerAvatar,
  StreamerInformation,
  StreamerName,
  StreamerDescription,
} from './styles';

interface IAvatar {
  streamerName: string;
  avatar: string;
  bio: string;
  name: string;
  isDeleted?: boolean;
}

const Avatar = ({ streamerName, avatar, bio, name, isDeleted }: IAvatar) => {
  return (
    <Link href={`/${isDeleted ? 'deletedvods' : 'videos'}/${name}`}>
      <AvatarContainer>
        <StreamerAvatar
          src={avatar.replace('300x300', '150x150')}
          alt={streamerName}
        />
        <StreamerInformation>
          <StreamerName>{streamerName}</StreamerName>
          <StreamerDescription>{bio}</StreamerDescription>
        </StreamerInformation>
      </AvatarContainer>
    </Link>
  );
};

export default Avatar;
