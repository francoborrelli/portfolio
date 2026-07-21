import { Col, Row, Space } from 'antd';
import AlbumSongDetails from './Album';
import { ExpandOutIcon } from '../Icons';
import VolumeControls from '../Layout/components/PlayingBar/Volume';
import ControlButtons from '../Layout/components/PlayingBar/ControlButtons';
import SongProgressBar from '../Layout/components/PlayingBar/SongProgressBar';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../Tooltip';

interface FullScreenPlayerProps {
  onExit: () => Promise<void>;
}

const ExpandOutButton: FC<FullScreenPlayerProps> = (props) => {
  const [t] = useTranslation(['playingBar']);
  return (
    <Tooltip title={t('Exit full screen')}>
      <button title={t('Exit full screen')} className='fullscreen-exit-button' onClick={props.onExit}>
        <ExpandOutIcon />
      </button>
    </Tooltip>
  );
};

export const FullScreenPlayer: FC<FullScreenPlayerProps> = (props) => {
  return (
    <div className='Full-screen-page'>
      <div></div>
      <div className='fullscreen-content'>
        <Row gutter={[24, 24]} justify='center' className='fullscreen-row'>
          <Col span={24}>
            <AlbumSongDetails />
          </Col>
          <Col span={24}>
            <SongProgressBar />
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <ControlButtons />
          </Col>
          <Col span={8} className='fullscreen-controls-end'>
            <Space>
              <VolumeControls />
              <ExpandOutButton onExit={props.onExit} />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

FullScreenPlayer.displayName = 'FullScreenPlayer';
