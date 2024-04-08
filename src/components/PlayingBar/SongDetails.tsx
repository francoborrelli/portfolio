import { memo } from 'react';
import { HeartLike } from './Heart';
import { useAppSelector } from '../../store/store';
import { getCurrentSongData } from '../../store/slices/playingBar';

const SongDetails = memo(() => {
  const currentSongData = useAppSelector(getCurrentSongData);
  const current = useAppSelector((state) => state.playingBar.currentSong);

  return (
    <div className='flex flex-row items-center'>
      <img
        alt='Album Cover'
        className='album-cover'
        src={`${process.env.PUBLIC_URL}/images/songs/${current + 1}.png`}
      />
      <div id='song-and-artist-name'>
        <h3 className='text-white font-bold song-title'>{currentSongData.name}</h3>
        <p className='text-gray-200 song-artist'>{currentSongData.artist}</p>
      </div>

      <HeartLike />
    </div>
  );
});

export default SongDetails;
