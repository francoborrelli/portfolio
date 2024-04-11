import { Clock } from '../Icons';
import SongView from './SongView';
import { PlaylistControls } from './controls';

// Utils
import { useTranslation } from 'react-i18next';

// Interfaces
import type { FC } from 'react';
import type { Playlist } from '../../interfaces/types';

interface PlaylistListProps {
  playlist: Playlist;
}

export const PlaylistList: FC<PlaylistListProps> = ({ playlist }) => {
  const { t } = useTranslation(['playlist']);

  return (
    <div
      className='playlist-list'
      style={{
        background: `linear-gradient(${playlist.color} -10%, rgb(18, 18, 18) 35%)`,
      }}
    >
      <PlaylistControls playlist={playlist} />
      <div className='playlist-table'>
        <div className='mobile-hidden flex justify-between items-center py-2'>
          <div style={{ flex: 1 }}>
            <h3 className='column-name text-center'>#</h3>
          </div>
          <div style={{ flex: 5 }}>
            <h3 className='column-name text-left'>{t('Name')}</h3>
          </div>
          <div className='tablet-hidden' style={{ flex: 4 }}>
            {/* <h3 className='column-name text-left'>{t('Skills')}</h3> */}
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
