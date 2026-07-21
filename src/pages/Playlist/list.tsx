import SongView from './SongView';
import { PlaylistControls } from './controls';
import { PlaylistTableHeader } from './tableHeader';

// Utils
import { useMemo, memo, type CSSProperties, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { filterAndSortSongs } from '../../utils/playlistSongs';

// Interfaces
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
  const sortBy = useAppSelector((state) => state.playlist.sortBy);
  const sortDirection = useAppSelector((state) => state.playlist.sortDirection);

  const hasSkills = playlist.songs.some((song) => song.skills.length > 0);
  const query = search.trim();

  const songs = useMemo(
    () =>
      filterAndSortSongs({
        songs: playlist.songs,
        order,
        query,
        sortBy,
        sortDirection,
        translate: tcv,
      }),
    [playlist.songs, order, query, sortBy, sortDirection, tcv]
  );

  return (
    <div
      className='playlist-list'
      style={{ '--playlist-color': playlist.color } as CSSProperties}
    >
      <PlaylistControls playlist={playlist} />
      <PlaylistTableHeader hasSkills={hasSkills} />
      <div>
        {songs.length === 0 && query ? (
          <div className='playlist-empty-search'>
            <h3>{t('No results found for', { query })}</h3>
            <p>{t('Check spelling or try different keywords')}</p>
          </div>
        ) : (
          songs.map((song, index) => (
            <SongView song={song} key={song.name} index={index} hasSkills={hasSkills} />
          ))
        )}
      </div>
    </div>
  );
});
