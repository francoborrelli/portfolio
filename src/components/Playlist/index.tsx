import { useParams } from 'react-router-dom';
import { Playlist } from '../../interfaces/types';

import { PlaylistHeader } from './header';
import { PlaylistList } from './list';

const PlaylistView = ({ playlists }: { playlists: Playlist[] }) => {
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
