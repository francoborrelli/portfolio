// Components
import { PlaylistList } from './list';
import { PlaylistHeader } from './header';

// Utils
import { useParams } from 'react-router-dom';
import { FC, RefObject, useEffect } from 'react';

// Constants
import { playlists } from '../../constants/cv';

// Redux
import { useAppDispatch } from '../../store/store';
import { playlistActions } from '../../store/slices/playlist';

const PlaylistView: FC<{ container: RefObject<HTMLDivElement> }> = (props) => {
  const dispatch = useAppDispatch();
  const { playlistId } = useParams();

  useEffect(() => {
    dispatch(playlistActions.resetOrder());
  }, [dispatch, playlistId]);

  const playlist = playlists.find((playlist) => playlist.name.toLowerCase() === playlistId)!;

  return (
    <div className='Playlist-section'>
      <PlaylistHeader playlist={playlist} container={props.container} />
      <PlaylistList playlist={playlist} />
    </div>
  );
};

export default PlaylistView;
