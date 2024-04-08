// Icons
import { LibraryIcon } from '../Icons';

// Utils
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Col, Space } from 'antd';
import PlaylistCardShort from './PlaylistCardShort';

// I18n
import { LanguageButton } from './Language';
import { useTranslation } from 'react-i18next';

// Interfaces
import type { Playlist } from '../../interfaces/types';

const Title = memo(() => {
  const { t } = useTranslation(['navbar']);

  return (
    <Space wrap>
      <LibraryIcon />
      <span className='Navigation-button'>{t('Your Library')}</span>
    </Space>
  );
});

const YourLibrary = ({ playlists }: { playlists: Playlist[] }) => {
  const navigate = useNavigate();

  const onClick = useCallback(
    (url: string) => {
      navigate(`/playlist/${url}`);
    },
    [navigate]
  );

  return (
    <div className='Navigation-section library'>
      <Title />

      <div className='library-list-container'>
        <Col style={{ overflowY: 'scroll' } as const}>
          <div>
            {playlists.map((playlist: Playlist, index: number) => {
              return (
                <PlaylistCardShort
                  key={playlist.name}
                  playlist={playlist}
                  onClick={() => {
                    onClick(index.toString());
                  }}
                />
              );
            })}
          </div>
        </Col>
        <Col style={{ maxHeight: 40 }}>
          <LanguageButton />
        </Col>
      </div>
    </div>
  );
};

export default YourLibrary;
