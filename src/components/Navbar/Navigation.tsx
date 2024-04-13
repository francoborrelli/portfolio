import { Col, Row } from 'antd';

import YourLibrary from './YourLibrary';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, SearchIcon } from '../Icons';
import NavigationButton from './NavigationButton';

// Interfaces
import type { FC } from 'react';
import type { Playlist } from '../../interfaces/types';

// i18n
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  playlists: Playlist[];
}

const Buttons = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['navbar']);

  return (
    <div className='Navigation-section'>
      <NavigationButton text={t('Home')} icon={<HomeIcon />} onClick={() => navigate('/')} />
      <a href='https://github.com/francoborrelli/portfolio' target='_blank' rel='noreferrer'>
        <NavigationButton onClick={() => {}} text={t('Search')} icon={<SearchIcon />} />
      </a>
    </div>
  );
};

const Navigation: FC<NavigationProps> = ({ playlists = [] }) => {
  return (
    <Row gutter={[8, 8]} style={{ height: '100%' }}>
      <Col span={24} style={{ maxHeight: 110 }}>
        <Buttons />
      </Col>
      <Col span={24} style={{ height: 'calc(100vh - 234px)' }}>
        <YourLibrary playlists={playlists} />
      </Col>
    </Row>
  );
};

export default Navigation;
