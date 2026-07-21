/* eslint-disable jsx-a11y/anchor-is-valid */

import { Avatar } from 'antd';
import { Play } from '../../components/Icons';
import { Tooltip } from '../../components/Tooltip';

// Interfaces
import type { Song } from '../../interfaces/types';

// Redux
import { useAppDispatch } from '../../store/store';
import { libraryActions } from '../../store/slices/library';

// Utils
import { useTranslation } from 'react-i18next';

interface SongViewProps {
  song: Song;
  index: number;
  hasSkills: boolean;
  onContextMenu: (song: Song, position: { x: number; y: number }) => void;
}

const SongView = ({ song, index, hasSkills, onContextMenu }: SongViewProps) => {
  const dispatch = useAppDispatch();
  const [t] = useTranslation(['cv']);

  return (
    <button
      type='button'
      data-song-row
      className='flex flex-col w-full hover:bg-spotify-gray-lightest items-center p-0 rounded-lg'
      onClick={() => {
        dispatch(libraryActions.setSongPlaying(song));
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        dispatch(libraryActions.setSongPlaying(song));
        onContextMenu(song, { x: event.clientX, y: event.clientY });
      }}
    >
      <div
        className={`playlist-track-row song-details ${
          hasSkills ? 'playlist-track-row--with-skills' : ''
        }`}
      >
        <div className='playlist-track-row__index mobile-hidden'>
          <p className='song-details-index'>{index + 1}</p>
          <p className='song-details-play'>
            <Play />
          </p>
        </div>

        <div className='playlist-track-row__cover'>
          {song.avatar || (
            <img src={song.imageUrl} alt='song cover' className='rounded-md' />
          )}
        </div>

        <div className='playlist-track-row__title flex flex-col'>
          <div className='flex flex-row items-center'>
            <p className='title text-left'>{t(song.name)}</p>
          </div>
          <a
            target='_blank'
            href={song.link}
            onClick={(e) => {
              e.stopPropagation();
            }}
            rel='noreferrer'
          >
            <p className='text-left artist'>{t(song.artist || '')}</p>
          </a>
        </div>

        <div className='playlist-track-row__tags tablet-hidden flex flex-row items-center justify-start flex-wrap space-x-2'>
          <Avatar.Group max={{ count: 2 }}>
            {(song.skills || []).map((tag) => (
              <Tooltip title={tag.text} placement='top' key={tag.text}>
                <Avatar key={tag.text} className='skill-avatar' icon={tag.icon} />
              </Tooltip>
            ))}
          </Avatar.Group>
        </div>

        <p className='playlist-track-row__time text-right'>{t(song.length || '')}</p>
      </div>
    </button>
  );
};

export default SongView;
