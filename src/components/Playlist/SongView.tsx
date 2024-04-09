/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar } from 'antd';
import { Tooltip } from '../Common/Tooltip';
import { useCallback, useState } from 'react';

import type { Song } from '../../interfaces/types';
import { Play } from '../Icons';
import { useAppDispatch } from '../../store/store';
import { libraryActions } from '../../store/slices/library';

const GitHubButton = ({ song }: { song: Song }) => {
  return (
    <a
      target='_blank'
      className='ml-2'
      href={song.github}
      rel='noopener noreferrer'
      onClick={(e) => e.stopPropagation()}
    >
      <img
        alt='GitHub Logo'
        className='w-4 h-4'
        src='https://github.githubassets.com/favicons/favicon-dark.png'
      />
    </a>
  );
};

const SongData = ({ song, isOpen, index }: { song: Song; isOpen: boolean; index: number }) => {
  const dispatch = useAppDispatch();

  const image = <img src={song.imageUrl} alt='song cover' className='w-10 h-10 mr-4 rounded-md' />;

  const title = (
    <div className='flex flex-col' style={{ flex: 5 }}>
      <div className='flex flex-row items-center'>
        <p className='title text-left'>{song.name}</p>
        {song.github ? <GitHubButton song={song} /> : null}
      </div>
      <a
        target='_blank'
        href={song.link}
        onClick={(e) => {
          e.stopPropagation();
        }}
        rel='noreferrer'
      >
        <p className='text-left artist'>{song.artist}</p>
      </a>
    </div>
  );

  const tags = (
    <div
      style={{ flex: 5 }}
      className='tablet-hidden flex flex-row items-center justify-start flex-wrap space-x-2'
    >
      <Avatar.Group
        maxCount={1}
        maxStyle={{
          color: '1cb955',
          fontWeight: 700,
          cursor: 'pointer',
          backgroundColor: '#1d1d1d',
        }}
      >
        {(song.description.tags || []).map((tag, index) => (
          <Tooltip title={tag.text} placement='top' key={tag.text}>
            <Avatar key={tag.text} style={{ backgroundColor: '#5c5c5c26' }} icon={tag.icon} />
          </Tooltip>
        ))}
      </Avatar.Group>
    </div>
  );

  const time = (
    <p className='text-right' style={{ flex: 4 }}>
      {song.location && `${song.location}, `}{' '}
      {song.lengthStart && `${song.lengthStart} - ${song.lengthEnd}`}
    </p>
  );

  return (
    <div
      className='song-details flex flex-row items-center w-full songDetails'
      onClick={() => {
        dispatch(libraryActions.setSongPlaying(song));
      }}
    >
      <div className='flex flex-row items-center justify-between w-full'>
        <div style={{ flex: 1 }} className='mobile-hidden'>
          <p className='song-details-index'>{index + 1}</p>
          <p className='song-details-play'>
            <Play />
          </p>
        </div>
        {image}
        {title}
        {tags}
        {time}
      </div>
    </div>
  );
};

const SongView = ({ song, index }: { song: Song; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return (
    <button
      key={song.name}
      className={`flex flex-col w-full hover:bg-spotify-gray-lightest items-center p-2 rounded-lg ${
        isOpen ? 'expanded' : ''
      }`}
      onClick={toggleOpen}
    >
      <SongData song={song} isOpen={isOpen} index={index} />
    </button>
  );
};

export default SongView;
