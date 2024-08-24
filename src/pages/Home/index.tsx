// Components
import { Col, Row } from 'antd';
import PlaylistCard from './PlaylistCard';
import { PlaylistHorizontal } from './PlaylistHorizontal';

// Utils
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FC, useCallback, useState } from 'react';

// Constants
import { playlists } from '../../constants/cv';
import { SOCIAL_NETWORKS } from '../../constants/socialNetworks';

// Interfaces
import type { Playlist } from '../../interfaces/types';

interface HomeProps {
  playlists: Playlist[];
}

interface PlaylistListProps extends HomeProps {
  onSetColor: (color: string) => void;
}

const HorizontalPlaylists: FC<PlaylistListProps> = (props) => {
  return (
    <Row gutter={[16, 16]} style={{ margin: 10 }} justify='space-between'>
      {SOCIAL_NETWORKS.map((socialNetwork) => {
        return (
          <Col key={socialNetwork.name} xs={12} md={12} xl={6}>
            <PlaylistHorizontal socialNetwork={socialNetwork} />
          </Col>
        );
      })}
    </Row>
  );
};

const Playlists: FC<PlaylistListProps> = ({ playlists, onSetColor }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['home']);

  const onClick = useCallback(
    (name: string) => {
      navigate(`/playlist/${name}`);
    },
    [navigate]
  );

  return (
    <div className='home'>
      <h1 className='playlist-header'>{t('Made for')} Franco Borrelli</h1>
      <div className='grid grid-cols-3 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {playlists.map((playlist: Playlist, index: number) => {
          return (
            <div
              key={playlist.name}
              onMouseEnter={() => {
                onSetColor(playlist.color);
              }}
            >
              <PlaylistCard
                playlist={playlist}
                onClick={() => onClick(playlist.name.toLowerCase())}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const [color, setColor] = useState('rgb(66, 32, 35)');
  return (
    <div
      className='Home-seccion'
      style={{
        transition: 'background: 0.5s',
        background: `linear-gradient(180deg, ${color} -20%, rgb(18, 18, 18) 50%)`,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <HorizontalPlaylists playlists={playlists} onSetColor={setColor} />
        </Col>
        <Col span={24}>
          <Playlists playlists={playlists} onSetColor={setColor} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
