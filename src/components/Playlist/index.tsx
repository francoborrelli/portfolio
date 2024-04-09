import { PlaylistList } from './list';
import { PlaylistHeader } from './header';

// Utils
import { useParams } from 'react-router-dom';

// Constants
import { playlists } from '../../constants/cv';

const PlaylistView = () => {
  let { playlistId } = useParams();

  if (playlistId === undefined) {
    playlistId = '0';
  }

  const playlist = playlists[parseInt(playlistId)];

  return (
    <div className='Playlist-section'>
      <PlaylistHeader playlist={playlist} />
      <PlaylistList playlist={playlist} />
    </div>
  );
};

export default PlaylistView;
