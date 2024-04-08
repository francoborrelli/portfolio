// Components
import { Col, Row } from 'antd';
import VolumeControls from './Volume';
import { Tooltip } from '../Common/Tooltip';

// Icons
import { DetailsIcon, DeviceIcon, ExpandIcon, ListIcon, MicrophoneIcon } from '../Icons';

// I18n
import { useTranslation } from 'react-i18next';

const ExtraControlButtons = () => {
  const { t } = useTranslation(['playingBar']);

  return (
    <div style={{ marginBottom: 10 }}>
      <Row gutter={18} align='middle'>
        <Tooltip title={t('Now playing view')}>
          <Col>
            <DetailsIcon />
          </Col>
        </Tooltip>

        <Tooltip title={t('Lyrics')}>
          <Col>
            <MicrophoneIcon />
          </Col>
        </Tooltip>

        <Tooltip title={t('Queue')}>
          <Col>
            <ListIcon />
          </Col>
        </Tooltip>

        <Tooltip title={t('Connect to a device')}>
          <Col>
            <DeviceIcon />
          </Col>
        </Tooltip>

        <Col>
          <VolumeControls />
        </Col>

        <Tooltip title={t('Full Screen')}>
          <Col>
            <ExpandIcon />
          </Col>
        </Tooltip>
      </Row>
    </div>
  );
};

export default ExtraControlButtons;
