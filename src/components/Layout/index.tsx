// Components
import { Col, Row } from 'antd';
import { Navbar } from './components/Navbar';
import { Library } from './components/Library';
import PlayingBar from './components/PlayingBar';
import { LanguageModal } from '../LanguageModal';
import { PlayingNow } from './components/NowPlaying';
import { PlayingNowDrawer } from '../PlayingNowDrawer';
import { ResizablePanels } from './ResizablePanels';

// Constants
import { playlists } from '../../constants/cv';

// Interfaces
import type { FC, ReactElement } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useAppSelector } from '../../store/store';

export const AppLayout: FC<{ children: ReactElement }> = (props) => {
  const isMobile = useIsMobile();
  const queue = useAppSelector((state) => state.library.queue);
  const detailsOpen = useAppSelector((state) => state.library.detailsOpen);
  const songPlaying = useAppSelector((state) => state.library.songPlaying);

  const showRight = !isMobile && detailsOpen && Boolean(songPlaying || queue);

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
            {isMobile ? (
              <div className='Main-section-col'>{props.children}</div>
            ) : (
              <ResizablePanels
                left={<Library playlists={playlists} />}
                center={<div className='Main-section-col'>{props.children}</div>}
                right={<PlayingNow />}
                showRight={showRight}
              />
            )}
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
