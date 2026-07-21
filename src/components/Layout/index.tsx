// Components
import { Col, Flex, Row } from 'antd';
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
import { useIsMobile } from '../../hooks/useIsMobile';

export const AppLayout: FC<{ children: ReactElement }> = (props) => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Modals & Drawers */}
      <LanguageModal />
      <PlayingNowDrawer />

      {/* Main Component */}
      <div className='main-container'>
        <Row justify='end' gutter={[8, 8]} wrap className='main-layout-row'>
          <Col span={24}>
            <Navbar />
          </Col>

          <Col span={24}>
            <Flex gap='small'>
              <div className='mobile-hidden'>
                <Library playlists={playlists} />
              </div>

              <div className='Main-section-col'>
                {/* Home | Playlists */}
                {props.children}
              </div>

              {!isMobile ? (
                <div className='mobile-hidden'>
                  <PlayingNow />
                </div>
              ) : null}
            </Flex>
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
