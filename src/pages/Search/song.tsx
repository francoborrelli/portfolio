/* eslint-disable jsx-a11y/anchor-is-valid */

// Interfaces
import type { SearchResult } from '.';

// Redux
import { useAppDispatch } from '../../store/store';
import { libraryActions } from '../../store/slices/library';

// Utils
import { useTranslation } from 'react-i18next';

interface SongViewProps {
  song: SearchResult;
  index: number;
  hasSkills: boolean;
}

const SongView = ({ song, index, hasSkills }: SongViewProps) => {
  const dispatch = useAppDispatch();
  const [t] = useTranslation(['cv']);

  const image = song.avatar || (
    <img src={song.imageUrl} alt='song cover' className='w-10 h-10 rounded-md' />
  );

  return (
    <button
      key={song.name}
      type='button'
      className='flex flex-col w-full hover:bg-spotify-gray-lightest items-center p-2 rounded-lg'
      onClick={() => {
        dispatch(libraryActions.setSongPlaying(song));
      }}
    >
      <div className='song-details flex flex-row items-center w-full songDetails'>
        <div className='flex flex-row items-center justify-between w-full'>
          <div className={`song-details-image mr-4${song.avatar ? ' has-avatar' : ''}`}>
            <div>{image}</div>
            <span className='image-button' aria-hidden>
              <svg
                data-encore-id='icon'
                role='img'
                height={16}
                width={16}
                fill='white'
                aria-hidden='true'
                viewBox='0 0 24 24'
              >
                <path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z'></path>
              </svg>
            </span>
          </div>
          <div className={`flex flex-col song-details-title${hasSkills ? ' has-skills' : ''}`}>
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
              <p className='text-left artist'>
                {t(song.artist || 'Skill')} • {t(song.playlist)}
              </p>
            </a>
          </div>
          <p className='text-right song-details-time'>{t(song.length!)}</p>
        </div>
      </div>
    </button>
  );
};

export default SongView;
