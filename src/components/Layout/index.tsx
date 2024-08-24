// Redux
import { useAppSelector } from '../../store/store';

// Components
import { Col, Row } from 'antd';
import { Navbar } from './components/Navbar';
import { Library } from './components/Library';
import PlayingBar from './components/PlayingBar';
import { LanguageModal } from '../LanguageModal';
import { PlayingNow } from './components/NowPlaying';
import { PlayingNowDrawer } from '../PlayingNowDrawer';

// Constants
import { playlists } from '../../constants/cv';

// Interfaces
import type { FC, ReactElement } from 'react';

export const AppLayout: FC<{ children: ReactElement }> = (props) => {
  const hasDetails = useAppSelector((state) => state.library.detailsOpen);
  const libraryCollapsed = useAppSelector((state) => state.library.collapsed);

  return (
    <>
      {/* Modals & Drawers */}
      <LanguageModal />
      <PlayingNowDrawer />

      {/* Main Component */}
      <div className='main-container'>
        <Row justify='end' gutter={[8, 8]} wrap style={{ height: 'calc(100vh - 106px)' }}>
          <Col span={24}>
            <Navbar />
          </Col>
          <Col
            xs={0}
            md={libraryCollapsed || !!hasDetails ? 3 : 6}
            xl={libraryCollapsed || !!hasDetails ? 2 : 6}
          >
            {/* Left panel - Navigation */}
            <Library playlists={playlists} />
          </Col>

          <Col
            xs={24}
            md={!!hasDetails ? 15 : libraryCollapsed ? 21 : 18}
            xl={!!hasDetails ? 16 : libraryCollapsed ? 22 : 18}
            className='Main-section-col'
          >
            {/* Home | Playlists */}
            {props.children}
          </Col>

          {/* Queue | Song details */}
          <Col xs={0} md={!!hasDetails ? 6 : 0}>
            <PlayingNow />
          </Col>
        </Row>
      </div>

      {/* Player bar */}
      <footer>
        <PlayingBar />
      </footer>
    </>
  );
};

AppLayout.displayName = 'AppLayout';
