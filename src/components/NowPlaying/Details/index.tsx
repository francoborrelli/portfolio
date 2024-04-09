import { Avatar } from 'antd';
import { NowPlayingCard } from './card';
import { Tooltip } from '../../Common/Tooltip';
import { useAppSelector } from '../../../store/store';

// Interfaces
import type { FC } from 'react';
import type { Song } from '../../../interfaces/types';
import { NowPlayingLayout } from '../layout';

const Profile: FC<{ song: Song }> = ({ song }) => {
  return <NowPlayingCard title={song.name!} subtitle={song.artist} image={song.imageUrl} />;
};

const Experience: FC<{ song: Song }> = ({ song }) => {
  return (
    <NowPlayingCard title={'Experience'}>
      {song.description.bulletPoints.map((point, index) => (
        <div key={index} className='playing-now-card-body'>
          {point}
        </div>
      ))}
    </NowPlayingCard>
  );
};

const Skills: FC<{ song: Song }> = ({ song }) => {
  return (
    <NowPlayingCard title='Skills'>
      {(song.description.tags || []).map((tag, index) => (
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
