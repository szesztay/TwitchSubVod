import React from 'react';
import { FiExternalLink, FiSearch } from 'react-icons/fi';

import { Container, Link } from './styles';

interface LinksProps {
  home?: boolean;
  clips?: boolean;
  vods?: boolean;
  download?: boolean;
  all?: boolean;
}

const LinkBox = ({ home, clips, vods, download, all }: LinksProps) => {
  if (all) {
    return (
      <Container>
        <Link href="/" aria-label="Home">
          <span>
            Home
            <FiExternalLink size={14} />
          </span>
        </Link>
        <Link href="/deletedclips" aria-label="DeletedClips">
          <span>
            Search for Deleted Clips
            <FiExternalLink size={14} />
            <sup>new</sup>
          </span>
        </Link>
        <Link href="/deletedvods" aria-label="DeletedVods">
          <span>
            Search for Deleted Vods
            <FiExternalLink size={14} />
            <sup>new</sup>
          </span>
        </Link>
        <Link href="/downloadclip" aria-label="DownloadClip">
          <span>
            Download Twitch Clips
            <FiExternalLink size={14} />
          </span>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      {home && (
        <Link href="/" aria-label="Home">
          <span>
            Home
            <FiExternalLink size={14} />
          </span>
        </Link>
      )}

      {clips && (
        <Link href="/deletedclips" aria-label="DeletedClips">
          <span>
            Search for deleted clips
            <FiExternalLink size={14} />
            <sup>new</sup>
          </span>
        </Link>
      )}

      {vods && (
        <Link href="/deletedvods" aria-label="DeletedVods">
          <span>
            Search for deleted vods
            <FiExternalLink size={14} />
            <sup>new</sup>
          </span>
        </Link>
      )}

      {download && (
        <Link href="/downloadclip" aria-label="DownloadClip">
          <span>
            Download Twitch Clips
            <FiExternalLink size={14} />
          </span>
        </Link>
      )}
    </Container>
  );
};

export default LinkBox;
