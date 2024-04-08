/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar } from 'antd';
import { Tooltip } from './Common/Tooltip';
import DescriptionView from './Description';
import { FC, useCallback, useState } from 'react';

import type { Song } from '../interfaces/types';

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

const DrawerIcon: FC<{ open: boolean }> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className={`drawer-icon w-6 h-6 text-white m-2 transition-transform duration-300 transform ${
        props.open ? 'rotate-180' : ''
      }`}
    >
      <path
        fillRule='evenodd'
        d='M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 15.586l6.293-6.293a1 1 0 011.414 1.414l-7 7A1 1 0 0110 18z'
        clipRule='evenodd'
      />
    </svg>
  );
};

const SongData = ({ song, isOpen, index }: { song: Song; isOpen: boolean; index: number }) => {
  const image = (
    <img src={song.imageUrl} alt='song cover' className='mobile-hidden w-10 h-10 mr-4 rounded-md' />
  );

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
      style={{ flex: 4 }}
      className='mobile-hidden flex flex-row items-center justify-start flex-wrap space-x-2'
    >
      <Avatar.Group
        maxCount={3}
        maxStyle={{ color: 'black', backgroundColor: '#1cd760', cursor: 'pointer' }}
      >
        {(song.description.tags || []).map((tag, index) => (
          <Tooltip title={tag.text} placement='top' key={tag.text}>
            <Avatar style={{ backgroundColor: tag.color }} icon={tag.icon} />
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
    <div className='song-details flex flex-row items-center w-full songDetails'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div style={{ flex: 1 }}>
          <p>{index + 1}</p>
        </div>
        {image}
        {title}
        {tags}
        {time}
      </div>
      <DrawerIcon open={isOpen} />
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
      {isOpen && <DescriptionView description={song.description} />}
    </button>
  );
};

export default SongView;
