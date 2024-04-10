import { Avatar, Image, Space } from 'antd';
import { NowPlayingCard } from './card';
import { Tooltip } from '../../Common/Tooltip';
import { useAppSelector } from '../../../store/store';

import { NowPlayingLayout } from '../layout';
import { useTranslation } from 'react-i18next';

// Interfaces
import type { FC } from 'react';
import type { Song } from '../../../interfaces/types';

import { FaGithub, FaLink } from 'react-icons/fa6';

const Profile: FC<{ song: Song }> = ({ song }) => {
  const [t] = useTranslation(['cv']);
  return (
    <NowPlayingCard title={t(song.name)!} subtitle={t(song.artist || '')} image={song.imageUrl}>
      {song.link || song.github ? (
        <Space style={{ marginTop: 10 }}>
          {song.link ? (
            <Tooltip title={t('WEB_SITE')} placement='top'>
              <a target={'_blank'} href={song.link} className='link-social-button' rel='noreferrer'>
                <FaLink />
              </a>
            </Tooltip>
          ) : null}

          {song.github ? (
            <Tooltip title={t('Github')} placement='top'>
              <a
                target={'_blank'}
                href={song.github}
                className='link-social-button'
                rel='noreferrer'
              >
                <FaGithub />
              </a>
            </Tooltip>
          ) : null}
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
          <a href={tag.link} target='_blank' rel='noreferrer'>
            <Avatar style={{ backgroundColor: '#5c5c5c26' }} icon={tag.icon} />
          </a>
        </Tooltip>
      ))}
    </NowPlayingCard>
  );
};

const Images: FC<{ song: Song }> = ({ song }) => {
  const [t] = useTranslation(['playingBar']);
  if (!song.images || !song.images.length) return null;

  return (
    <NowPlayingCard title={t('Images')}>
      <Image.PreviewGroup items={song.images}>
        <Image width={'100%'} src={song.images[0]} />
      </Image.PreviewGroup>
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
      <Images song={song} />
    </NowPlayingLayout>
  );
};
