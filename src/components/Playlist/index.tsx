// Components
import { PlaylistList } from './list';
import { PlaylistHeader } from './header';

// Utils
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Constants
import { playlists } from '../../constants/cv';

// Redux
import { useAppDispatch } from '../../store/store';
import { playlistActions } from '../../store/slices/playlist';

const PlaylistView = () => {
  const dispatch = useAppDispatch();
  const { playlistId } = useParams();

  useEffect(() => {
    dispatch(playlistActions.resetOrder());
  }, [dispatch, playlistId]);

  const playlist = playlists[parseInt(playlistId || '0')];

  return (
    <div className='Playlist-section'>
      <PlaylistHeader playlist={playlist} />
      <PlaylistList playlist={playlist} />
    </div>
  );
};

export default PlaylistView;
