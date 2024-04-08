import { FC } from 'react';
import SongView from '../SongView';
import type { Playlist } from '../../interfaces/types';
import { Clock } from '../Icons';
import { PlaylistControls } from './controls';
import { useTranslation } from 'react-i18next';

interface PlaylistListProps {
  playlist: Playlist;
}

export const PlaylistList: FC<PlaylistListProps> = ({ playlist }) => {
  const { t } = useTranslation(['playlist']);

  return (
    <div
      className='playlist-list'
      style={{
        background: `linear-gradient(180deg, ${playlist.color} -80%, #121212 40%)`,
      }}
    >
      <PlaylistControls />
      <div className='playlist-table'>
        <div className='flex justify-between items-center py-2 px-4 ml-10'>
          <div className='w-1/3'>
            <h3 className='column-name text-left'>{t('Name')}</h3>
          </div>
          <div className='w-1/3 mobile-hidden'>
            <h3 className='column-name text-md text-left'>{t('Skills')}</h3>
          </div>
          <div className='w-1/3 '>
            <h3 className='text-md text-white text-right'>
              <Clock />
            </h3>
          </div>
        </div>
      </div>
      <div>
        {playlist.songs.map((song) => (
          <SongView song={song} />
        ))}
      </div>
    </div>
  );
};
