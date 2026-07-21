// Icons
import { LibraryCollapsedIcon, LibraryIcon } from '../../../Icons';

// Utils
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Tooltip } from '../../../Tooltip';
import PlaylistCardShort from './PlaylistCardShort';

// I18n
import { LanguageButton } from './Language';
import { useTranslation } from 'react-i18next';

// Redux
import { libraryActions } from '../../../../store/slices/library';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

// Interfaces
import type { Playlist } from '../../../../interfaces/types';

const Title = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['navbar']);
  const collapsed = useAppSelector((state) => state.library.collapsed);

  if (collapsed) {
    return (
      <div className='library-header library-header--collapsed'>
        <Tooltip placement='right' title={t('Expand your library')}>
          <span className='library-card-hitbox'>
            <button
              className='library-expand-button'
              onClick={() => dispatch(libraryActions.toggleLibrary())}
            >
              <LibraryCollapsedIcon />
            </button>
          </span>
        </Tooltip>
      </div>
    );
  }

  return (
    <div className='library-header'>
      <Tooltip placement='top' title={t('Collapse your library')}>
        <button
          type='button'
          className='library-header__toggle'
          onClick={() => dispatch(libraryActions.toggleLibrary())}
        >
          <LibraryIcon />
        </button>
      </Tooltip>
      <span className='Navigation-button'>{t('Your Library')}</span>
    </div>
  );
});

const YourLibrary = ({ playlists }: { playlists: Playlist[] }) => {
  const navigate = useNavigate();
  const collapsed = useAppSelector((state) => state.library.collapsed);

  const onSelect = useCallback(
    (name: string) => {
      navigate(`/playlist/${name.toLowerCase()}`);
    },
    [navigate]
  );

  return (
    <div className={`Navigation-section library ${!collapsed ? 'open' : ''}`}>
      <Title />

      <div className='library-list-container'>
        <div className={collapsed ? 'library-list-scroll-collapsed' : 'library-list-scroll'}>
          {playlists.map((playlist: Playlist) => (
            <PlaylistCardShort key={playlist.name} playlist={playlist} onSelect={onSelect} />
          ))}
        </div>
        <div className='library-language-col'>
          <LanguageButton />
        </div>
      </div>
    </div>
  );
};

export default YourLibrary;
