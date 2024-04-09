// Components
import { Col, Row } from 'antd';
import VolumeControls from './Volume';
import { Tooltip } from '../Common/Tooltip';

// Icons
import { DetailsIcon, DeviceIcon, ExpandIcon, ListIcon, MicrophoneIcon } from '../Icons';

// I18n
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { languageActions } from '../../store/slices/language';
import { libraryActions } from '../../store/slices/library';

const LyricsButton = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['playingBar']);

  return (
    <Tooltip title={t('Lyrics')}>
      <button
        style={{ marginLeft: 5, marginRight: 5 }}
        onClick={() => dispatch(languageActions.openLanguageModal())}
      >
        <MicrophoneIcon />
      </button>
    </Tooltip>
  );
};

const DetailsButton = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['playingBar']);

  const actions = useAppSelector((state) => state.library.detailsOpen);
  const songPlaying = useAppSelector((state) => state.library.songPlaying);

  return (
    <Tooltip title={t('Now playing view')}>
      <button
        disabled={!songPlaying}
        onClick={() => dispatch(libraryActions.toggleSongPlaying())}
        style={{
          marginLeft: 5,
          marginRight: 10,
          cursor: songPlaying ? 'pointer' : 'not-allowed',
        }}
      >
        <DetailsIcon active={actions && !!songPlaying} />
      </button>
    </Tooltip>
  );
};

const ExtraControlButtons = () => {
  const { t } = useTranslation(['playingBar']);

  return (
    <div style={{ marginBottom: 10 }}>
      <Row gutter={18} align='middle'>
        <DetailsButton />

        <LyricsButton />

        <Tooltip title={t('Queue')}>
          <Col className='hiddable-icon'>
            <ListIcon />
          </Col>
        </Tooltip>

        <Tooltip title={t('Connect to a device')}>
          <Col className='hiddable-icon'>
            <DeviceIcon />
          </Col>
        </Tooltip>

        <Col>
          <VolumeControls />
        </Col>

        <Tooltip title={t('Full Screen')}>
          <Col className='hiddable-icon'>
            <ExpandIcon />
          </Col>
        </Tooltip>
      </Row>
    </div>
  );
};

export default ExtraControlButtons;
