import SongDetails from './SongDetails';
import { getCurrentSongData, playingBarActions } from '../../../../store/slices/playingBar';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { Col, Row } from 'antd';
import { ListIcon, Pause, Play } from '../../../Icons';
import { libraryActions } from '../../../../store/slices/library';

const PlayButton = () => {
  const dispatch = useAppDispatch();
  const playing = useAppSelector((state) => state.playingBar.playing);
  return (
    <button
      onClick={() =>
        playing ? dispatch(playingBarActions.setPause()) : dispatch(playingBarActions.setPlaying())
      }
    >
      {!playing ? <Play /> : <Pause />}
    </button>
  );
};

const QueueButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(libraryActions.openQueue())}>
      <ListIcon />
    </button>
  );
};

const MobileProgress = () => {
  const duration = useAppSelector((state) => state.playingBar.duration);
  const currentTime = useAppSelector((state) => state.playingBar.currentTime);

  return (
    <div className='time-line'>
      <div
        className='current-time'
        style={{
          ['--progress' as string]: `${(currentTime / duration) * 100}%`,
        }}
      ></div>
    </div>
  );
};

const NowPlayingBarMobile = () => {
  const currentSongData = useAppSelector(getCurrentSongData);

  return (
    <div>
      <div
        className='mobile-player'
        style={{
          ['--song-color' as string]: currentSongData.color,
        }}
      >
        <Row justify='space-between'>
          <Col>
            <SongDetails />
          </Col>
          <Col className='mobile-player-actions-col'>
            <div className='mobile-player-actions'>
              <QueueButton />
              <PlayButton />
            </div>
          </Col>
        </Row>
        <MobileProgress />
      </div>
    </div>
  );
};

export default NowPlayingBarMobile;
