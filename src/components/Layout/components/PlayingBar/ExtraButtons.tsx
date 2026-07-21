// Components
import { Col, Row } from 'antd';
import VolumeControls from './Volume';
import { Tooltip } from '../../../Tooltip';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';

// Icons
import { DetailsIcon, DeviceIcon, ExpandIcon, ListIcon, MicrophoneIcon } from '../../../Icons';

// I18n
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { languageActions } from '../../../../store/slices/language';
import { libraryActions } from '../../../../store/slices/library';
import { FullScreenPlayer } from '../../../FullScreen';

const LyricsButton = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['playingBar']);

  return (
    <Tooltip title={t('Lyrics')}>
      <button
        className='extra-btn extra-btn--lyrics'
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

  const queue = useAppSelector((state) => state.library.queue);
  const actions = useAppSelector((state) => state.library.detailsOpen);
  const songPlaying = useAppSelector((state) => state.library.songPlaying);

  const active = actions && !!songPlaying && !queue;

  return (
    <>
      <Tooltip title={t('Now playing view')}>
        <button
          disabled={!songPlaying}
          className={`extra-btn extra-btn--details ${active ? 'active-icon-button' : ''} ${
            songPlaying ? 'extra-btn--pointer' : 'extra-btn--blocked'
          }`}
          onClick={() => dispatch(libraryActions.toggleSongPlaying())}
        >
          <DetailsIcon active={active} />
        </button>
      </Tooltip>
    </>
  );
};

const QueueButton = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['playingBar']);

  const isQueueOpen = useAppSelector((state) => state.library.queue);
  const actions = useAppSelector((state) => state.library.detailsOpen);

  const active = actions && !!isQueueOpen;

  return (
    <Tooltip title={t('Queue')}>
      <button
        className={`extra-btn extra-btn--queue ${active ? 'active-icon-button' : ''} ${
          isQueueOpen ? 'extra-btn--pointer' : 'extra-btn--blocked'
        }`}
        onClick={() =>
          isQueueOpen ? dispatch(libraryActions.closeQueue()) : dispatch(libraryActions.openQueue())
        }
      >
        <ListIcon active={active} />
      </button>
    </Tooltip>
  );
};

const ExpandButton = () => {
  const { t } = useTranslation(['playingBar']);

  const handle = useFullScreenHandle();
  const isQueueOpen = useAppSelector((state) => state.library.queue);

  return (
    <>
      <FullScreen handle={handle}>
        {handle.active ? <FullScreenPlayer onExit={handle.exit} /> : null}
      </FullScreen>

      <Tooltip title={t('Full Screen')}>
        <button
          onClick={handle.enter}
          className={`extra-btn extra-btn--expand ${
            isQueueOpen ? 'extra-btn--pointer' : 'extra-btn--blocked'
          }`}
        >
          <ExpandIcon />
        </button>
      </Tooltip>
    </>
  );
};

const ExtraControlButtons = () => {
  const { t } = useTranslation(['playingBar']);

  return (
    <div>
      <Row gutter={18} align='middle'>
        <DetailsButton />

        <LyricsButton />

        <QueueButton />

        <Tooltip title={t('Connect to a device')}>
          <Col className='hiddable-icon'>
            <DeviceIcon />
          </Col>
        </Tooltip>

        <Col>
          <VolumeControls />
        </Col>

        <Col>
          <ExpandButton />
        </Col>
      </Row>
    </div>
  );
};

export default ExtraControlButtons;
