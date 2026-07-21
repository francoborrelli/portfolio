import SongView from './SongView';
import { PlaylistControls } from './controls';
import { PlaylistTableHeader } from './tableHeader';
import { SongContextMenu } from './SongContextMenu';

// Utils
import { useCallback, useMemo, useState, memo, type CSSProperties, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { filterAndSortSongs } from '../../utils/playlistSongs';

// Interfaces
import type { Playlist, Song } from '../../interfaces/types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { libraryActions } from '../../store/slices/library';

interface PlaylistListProps {
  playlist: Playlist;
}

type ContextMenuState = {
  song: Song;
  position: { x: number; y: number };
};

export const PlaylistList: FC<PlaylistListProps> = memo(({ playlist }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['playlist']);
  const [tcv] = useTranslation(['cv']);
  const order = useAppSelector((state) => state.playlist.order);
  const search = useAppSelector((state) => state.playlist.search);
  const sortBy = useAppSelector((state) => state.playlist.sortBy);
  const sortDirection = useAppSelector((state) => state.playlist.sortDirection);
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);

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

  const handleContextMenu = useCallback((song: Song, position: { x: number; y: number }) => {
    setContextMenu({ song, position });
  }, []);

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
            <SongView
              song={song}
              key={song.name}
              index={index}
              hasSkills={hasSkills}
              onContextMenu={handleContextMenu}
            />
          ))
        )}
      </div>

      {contextMenu ? (
        <SongContextMenu
          song={contextMenu.song}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
          onPlay={() => dispatch(libraryActions.setSongPlaying(contextMenu.song))}
        />
      ) : null}
    </div>
  );
});
