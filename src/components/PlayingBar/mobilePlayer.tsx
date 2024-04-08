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
          background: `linear-gradient(356deg, rgb(18 18 18)  20px, ${currentSongData.color} 500%),
    url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)`,
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
