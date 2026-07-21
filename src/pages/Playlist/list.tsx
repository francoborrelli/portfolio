import { Clock } from '../../components/Icons';
import SongView from './SongView';
import { PlaylistControls } from './controls';

// Utils
import { useTranslation } from 'react-i18next';

// Interfaces
import { memo, type FC } from 'react';
import type { Playlist } from '../../interfaces/types';
import { useAppSelector } from '../../store/store';

interface PlaylistListProps {
  playlist: Playlist;
}

export const PlaylistList: FC<PlaylistListProps> = memo(({ playlist }) => {
  const { t } = useTranslation(['playlist']);
  const [tcv] = useTranslation(['cv']);
  const order = useAppSelector((state) => state.playlist.order);
  const search = useAppSelector((state) => state.playlist.search);

  const hasSkills = playlist.songs.some((song) => song.skills.length > 0);

  const songs = playlist.songs.filter((song) => {
    if (order !== 'ALL' && !song.types?.includes(order as any)) return false;

    const query = search.trim().toLowerCase();
    if (!query) return true;

    const name = tcv(song.name).toLowerCase();
    const artist = song.artist ? tcv(song.artist).toLowerCase() : '';
    return name.includes(query) || artist.includes(query);
  });

  return (
    <div
      className='playlist-list'
      style={{
        background: `linear-gradient(${playlist.color} -70px, #121212 140px)`,
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
            <h3 style={{ marginRight: 10, textAlign: 'right' }}>
              <Clock />
            </h3>
          </div>
        </div>
      </div>
      <div>
        {songs.map((song, index) => (
          <SongView song={song} key={song.name} index={index} hasSkills={hasSkills} />
        ))}
      </div>
    </div>
  );
});
