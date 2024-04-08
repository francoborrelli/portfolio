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
        <div className='flex justify-between items-center py-2'>
          <div style={{ flex: 1 }}>
            <h3 className='column-name text-center'>#</h3>
          </div>
          <div style={{ flex: 5 }}>
            <h3 className='column-name text-left'>{t('Name')}</h3>
          </div>
          <div className='mobile-hidden' style={{ flex: 4 }}>
            <h3 className='column-name text-left'>{t('Skills')}</h3>
          </div>
          <div
            style={{
              flex: 4,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <h3 className='text-center' style={{ marginRight: 50 }}>
              <Clock />
            </h3>
          </div>
        </div>
      </div>
      <div>
        {playlist.songs.map((song, index) => (
          <SongView song={song} index={index} />
        ))}
      </div>
    </div>
  );
};
