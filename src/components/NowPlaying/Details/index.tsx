import { Avatar, Space } from 'antd';
import { NowPlayingCard } from './card';
import { Tooltip } from '../../Common/Tooltip';
import { useAppSelector } from '../../../store/store';

// Interfaces
import type { FC } from 'react';
import type { Song } from '../../../interfaces/types';
import { NowPlayingLayout } from '../layout';
import { useTranslation } from 'react-i18next';

import { FaLink } from 'react-icons/fa6';

const Profile: FC<{ song: Song }> = ({ song }) => {
  const [t] = useTranslation(['cv']);
  return (
    <NowPlayingCard title={t(song.name)!} subtitle={t(song.artist || '')} image={song.imageUrl}>
      {song.link ? (
        <Space style={{ marginTop: 10 }}>
          <Tooltip title={t('WEB_SITE')} placement='top'>
            <a target={'_blank'} href={song.link} className='link-social-button' rel='noreferrer'>
              <FaLink />
            </a>
          </Tooltip>
        </Space>
      ) : null}
    </NowPlayingCard>
  );
};

const Experience: FC<{ song: Song }> = ({ song }) => {
  const [t] = useTranslation(['playingBar']);
  const [tcv] = useTranslation(['cv']);

  if (!song.description) return null;
  return (
    <NowPlayingCard title={t('Experience')}>
      {tcv(song.description)
        .split('\n')
        .map((bullet, index) => (
          <div className='playing-now-card-body' key={index}>
            {bullet}
          </div>
        ))}
    </NowPlayingCard>
  );
};

const Skills: FC<{ song: Song }> = ({ song }) => {
  const [t] = useTranslation(['playingBar']);
  if (!song.skills || !song.skills.length) return null;

  return (
    <NowPlayingCard title={t('Skills')}>
      {(song.skills || []).map((tag) => (
        <Tooltip title={tag.text} placement='top' key={tag.text}>
          <Avatar style={{ backgroundColor: '#5c5c5c26' }} icon={tag.icon} />
        </Tooltip>
      ))}
    </NowPlayingCard>
  );
};

export const Details = () => {
  const song = useAppSelector((state) => state.library.songPlaying);

  if (!song) return null;

  return (
    <NowPlayingLayout>
      <Profile song={song} />
      <Skills song={song} />
      <Experience song={song} />
    </NowPlayingLayout>
  );
};
