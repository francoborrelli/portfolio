// Icons
import { LibraryCollapsedIcon, LibraryIcon } from '../../../Icons';

// Utils
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Col, Space } from 'antd';
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
      <Tooltip placement='right' title={t('Expand your library')}>
        <button
          className='library-expand-button'
          onClick={() => dispatch(libraryActions.toggleLibrary())}
        >
          <LibraryCollapsedIcon />
        </button>
      </Tooltip>
    );
  }

  return (
    <Space wrap>
      <Tooltip placement='top' title={t('Collapse your library')}>
        <button onClick={() => dispatch(libraryActions.toggleLibrary())}>
          <LibraryIcon />
        </button>
      </Tooltip>
      <span className='Navigation-button'>{t('Your Library')}</span>
    </Space>
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
        <Col className={collapsed ? undefined : 'library-list-scroll'}>
          <div className={collapsed ? 'library-list-scroll-collapsed' : undefined}>
            {playlists.map((playlist: Playlist) => (
              <PlaylistCardShort key={playlist.name} playlist={playlist} onSelect={onSelect} />
            ))}
          </div>
        </Col>
        <Col className='library-language-col'>
          <LanguageButton />
        </Col>
      </div>
    </div>
  );
};

export default YourLibrary;
