import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Clock } from '../../components/Icons';
import type { PlaylistSortDirection } from '../../store/slices/playlist';
import { playlistActions } from '../../store/slices/playlist';
import { useAppDispatch, useAppSelector } from '../../store/store';

const SortTriangle: FC<{
  active: boolean;
  direction: PlaylistSortDirection;
}> = ({ active, direction }) => (
  <span
    className={[
      'sort-triangle',
      direction === 'desc' ? 'sort-triangle--down' : '',
      active ? 'sort-triangle--visible' : '',
    ]
      .filter(Boolean)
      .join(' ')}
    aria-hidden
  />
);

interface PlaylistTableHeaderProps {
  hasSkills: boolean;
}

export const PlaylistTableHeader: FC<PlaylistTableHeaderProps> = memo(({ hasSkills }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['playlist']);
  const sortBy = useAppSelector((state) => state.playlist.sortBy);
  const sortDirection = useAppSelector((state) => state.playlist.sortDirection);

  const sortClass = (column: 'name' | 'length') =>
    [
      'column-name',
      'column-name--sortable',
      sortBy === column ? 'column-name--active' : '',
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <div className='playlist-table'>
      <div
        className={`playlist-track-row mobile-hidden ${
          hasSkills ? 'playlist-track-row--with-skills' : ''
        }`}
      >
        <button
          type='button'
          className={`column-name column-name--sortable playlist-track-row__index ${
            sortBy === 'custom' ? 'column-name--active' : ''
          }`}
          onClick={() =>
            dispatch(playlistActions.setSort({ sortBy: 'custom', sortDirection: 'asc' }))
          }
        >
          #
        </button>

        <div className='playlist-track-row__title playlist-track-row__title--header'>
          <button
            type='button'
            className={`${sortClass('name')} text-left`}
            onClick={() => dispatch(playlistActions.toggleSort({ sortBy: 'name' }))}
          >
            {t('Name')}
            <SortTriangle active={sortBy === 'name'} direction={sortDirection} />
          </button>
        </div>

        <div className='playlist-track-row__tags tablet-hidden'>
          {hasSkills ? <span className='column-name'>{t('Skills')}</span> : null}
        </div>

        <div className='playlist-track-row__time'>
          <button
            type='button'
            className={sortClass('length')}
            onClick={() => dispatch(playlistActions.toggleSort({ sortBy: 'length' }))}
          >
            <SortTriangle active={sortBy === 'length'} direction={sortDirection} />
            <Clock />
          </button>
        </div>
      </div>
    </div>
  );
});
