import { useEffect, useRef, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Tooltip } from '../../components/Tooltip';
import { CloseIcon, SearchIcon } from '../../components/Icons';
import { playlistActions } from '../../store/slices/playlist';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const PlaylistSearch: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.playlist.search);
  const [t] = useTranslation(['playlist']);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const isOpen = open || search.length > 0;

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || search.length > 0) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [isOpen, search.length]);

  const clearSearch = () => {
    dispatch(playlistActions.setSearch({ search: '' }));
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div
      ref={containerRef}
      className={`playlist-search ${isOpen ? 'playlist-search--open' : ''}`}
    >
      <Tooltip title={t('Search in playlist')} open={isOpen ? false : undefined}>
        <button
          type='button'
          className='playlist-search__icon'
          aria-label={t('Search in playlist')}
          onClick={() => setOpen(true)}
        >
          <SearchIcon />
        </button>
      </Tooltip>

      <input
        ref={inputRef}
        type='text'
        className='playlist-search__input'
        value={search}
        placeholder={t('Search in playlist')}
        tabIndex={isOpen ? 0 : -1}
        onChange={(e) => dispatch(playlistActions.setSearch({ search: e.target.value }))}
      />

      {search.length > 0 && (
        <button
          type='button'
          className='playlist-search__clear'
          aria-label='Clear'
          onMouseDown={(e) => e.preventDefault()}
          onClick={clearSearch}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
