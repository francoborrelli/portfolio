import { Avatar } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { NowPlayingCard } from './card';
import { Tooltip } from '../Common/Tooltip';
import { FC } from 'react';
import { Song } from '../../interfaces/types';
import { CloseIcon } from '../Icons';
import { libraryActions } from '../../store/slices/library';

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

const CloseButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='playing-section-close-button'>
      <button
        onClick={() => {
          dispatch(libraryActions.removeSongPlaying());
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export const PlayingNow = () => {
  const song = useAppSelector((state) => state.library.songPlaying);

  if (!song) return null;

  return (
    <div className='playing-section'>
      <CloseButton />
      <Profile song={song} />
      <Skills song={song} />
      <Experience song={song} />
    </div>
  );
};
