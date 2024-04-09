import SongDetails from './SongDetails';
import { getCurrentSongData, playingBarActions } from '../../store/slices/playingBar';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Col, Row } from 'antd';
import { ListIcon, Pause, Play } from '../Icons';

const PlayButton = () => {
  const dispatch = useAppDispatch();
  const { playing } = useAppSelector((state) => state.playingBar);
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

const NowPlayingBarMobile = () => {
  const currentSongData = useAppSelector(getCurrentSongData);

  return (
    <div>
      <div
        className='mobile-player'
        style={{
          background: `linear-gradient(${currentSongData.color} -50%, rgb(18, 18, 18) 100%)`,
        }}
      >
        <Row justify='space-between'>
          <Col>
            <SongDetails />
          </Col>
          <Col style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 50,
                marginRight: 5,
                justifyContent: 'space-between',
              }}
            >
              <ListIcon />
              <PlayButton />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NowPlayingBarMobile;