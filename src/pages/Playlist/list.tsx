import SongView from './SongView';
import { PlaylistControls } from './controls';
import { PlaylistTableHeader } from './tableHeader';

// Utils
import { useMemo, memo, type CSSProperties, type FC } from 'react';
import { useTranslation } from 'react-i18next';

// Interfaces
import type { Playlist, Song } from '../../interfaces/types';
import { useAppSelector } from '../../store/store';

interface PlaylistListProps {
  playlist: Playlist;
}

const parseLengthValue = (value: string) => {
  const yearsMatch = value.match(/(\d+)\s*years?/i);
  if (yearsMatch) return Number(yearsMatch[1]);

  const years = [...value.matchAll(/\b(?:19|20)\d{2}\b/g)].map((match) => Number(match[0]));
  if (years.length) {
    if (/present|actualidad|heute|oggi|présent/i.test(value)) return 9999;
    return Math.max(...years);
  }

  return value.toLowerCase();
};

const compareValues = (a: string | number, b: string | number) => {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), undefined, { sensitivity: 'base' });
};

export const PlaylistList: FC<PlaylistListProps> = memo(({ playlist }) => {
  const { t } = useTranslation(['playlist']);
  const [tcv] = useTranslation(['cv']);
  const order = useAppSelector((state) => state.playlist.order);
  const search = useAppSelector((state) => state.playlist.search);
  const sortBy = useAppSelector((state) => state.playlist.sortBy);
  const sortDirection = useAppSelector((state) => state.playlist.sortDirection);

  const hasSkills = playlist.songs.some((song) => song.skills.length > 0);
  const query = search.trim();

  const songs = useMemo(() => {
    const filtered = playlist.songs.filter((song) => {
      if (order !== 'ALL' && !song.types?.includes(order as any)) return false;

      if (!query) return true;

      const q = query.toLowerCase();
      const name = tcv(song.name).toLowerCase();
      const artist = song.artist ? tcv(song.artist).toLowerCase() : '';
      return name.includes(q) || artist.includes(q);
    });

    if (sortBy === 'custom') return filtered;

    const direction = sortDirection === 'asc' ? 1 : -1;

    return [...filtered].sort((a: Song, b: Song) => {
      if (sortBy === 'name') {
        return compareValues(tcv(a.name).toLowerCase(), tcv(b.name).toLowerCase()) * direction;
      }

      const aLength = parseLengthValue(tcv(a.length || ''));
      const bLength = parseLengthValue(tcv(b.length || ''));
      return compareValues(aLength, bLength) * direction;
    });
  }, [playlist.songs, order, query, sortBy, sortDirection, tcv]);

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
