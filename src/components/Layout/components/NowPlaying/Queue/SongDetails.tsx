import { FC, memo } from 'react';
import { Pause, Play } from '../../../../Icons';
import { AVAILABLE_SONGS } from '../../../../../constants/songs';
import { useAppDispatch } from '../../../../../store/store';
import { playingBarActions } from '../../../../../store/slices/playingBar';
import { useTranslation } from 'react-i18next';

const SONG_INDEX_BY_NAME = new Map(AVAILABLE_SONGS.map((song, index) => [song.name, index]));

interface QueueSongDetailsProps {
  song: (typeof AVAILABLE_SONGS)[number];
  isCurrent?: boolean;
}

const QueueSongDetails: FC<QueueSongDetailsProps> = memo(({ song, isCurrent = false }) => {
  const [t] = useTranslation(['cv']);
  const dispatch = useAppDispatch();

  const onPlay = () => {
    const index = SONG_INDEX_BY_NAME.get(song.name);
    if (index === undefined) return;
    dispatch(playingBarActions.setSong({ song: index }));
  };

  return (
    <div className='queue-song'>
      <div className=' flex flex-row items-center'>
        <div className='queue-song-image-container'>
          <div className='queue-song-overlay' onClick={onPlay}>
            {isCurrent ? <Pause /> : <Play />}
          </div>
          <img
            alt='Album Cover'
            className='album-cover'
            src={`${import.meta.env.BASE_URL}images/songs/${song.image}`}
          />
        </div>

        <div id='song-and-artist-name'>
          <p className='text-white font-bold song-title' title={t(song.name)}>
            {t(song.name)}
          </p>
          <p className='text-gray-200 song-artist' title={t(song.artist)}>
            {t(song.artist)}
          </p>
        </div>
      </div>
    </div>
  );
});

QueueSongDetails.displayName = 'QueueSongDetails';

export default QueueSongDetails;
