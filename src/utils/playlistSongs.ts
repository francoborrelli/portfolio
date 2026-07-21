import type {
  PlaylistOrder,
  PlaylistSortBy,
  PlaylistSortDirection,
  Song,
} from '../interfaces/types';

type TranslateFn = (key: string) => string;

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

const matchesOrder = (song: Song, order: PlaylistOrder) =>
  order === 'ALL' || Boolean(song.types?.includes(order));

const matchesQuery = (song: Song, query: string, translate: TranslateFn) => {
  if (!query) return true;

  const q = query.toLowerCase();
  const name = translate(song.name).toLowerCase();
  const artist = song.artist ? translate(song.artist).toLowerCase() : '';
  return name.includes(q) || artist.includes(q);
};

const compareSongs = (
  a: Song,
  b: Song,
  sortBy: Exclude<PlaylistSortBy, 'custom'>,
  translate: TranslateFn
) => {
  if (sortBy === 'name') {
    return compareValues(translate(a.name).toLowerCase(), translate(b.name).toLowerCase());
  }

  return compareValues(
    parseLengthValue(translate(a.length || '')),
    parseLengthValue(translate(b.length || ''))
  );
};

export const filterAndSortSongs = ({
  songs,
  order,
  query,
  sortBy,
  sortDirection,
  translate,
}: {
  songs: Song[];
  order: PlaylistOrder;
  query: string;
  sortBy: PlaylistSortBy;
  sortDirection: PlaylistSortDirection;
  translate: TranslateFn;
}): Song[] => {
  const filtered = songs.filter(
    (song) => matchesOrder(song, order) && matchesQuery(song, query, translate)
  );

  if (sortBy === 'custom') return filtered;

  const direction = sortDirection === 'asc' ? 1 : -1;
  return [...filtered].sort((a, b) => compareSongs(a, b, sortBy, translate) * direction);
};
