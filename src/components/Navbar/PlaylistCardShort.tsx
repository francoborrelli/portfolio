import { Playlist } from '../../interfaces/types';

const PlaylistCardShort = ({ playlist, onClick }: { playlist: Playlist; onClick: () => void }) => {
  return (
    <button style={{ borderRadius: 10 }} className='library-card' onClick={onClick}>
      <div className='aspect-square p-2 h-full items-center'>
        <img src={playlist.imageUrl} alt='' style={{ width: 52 }} />
      </div>
      <div id='song-and-artist-name'>
        <h3 className='text-md font-semibold text-white'>{playlist.name}</h3>

        <p
          className='text-md font-semibold text-white'
          style={{
            opacity: 0.7,
            fontWeight: 400,
          }}
        >
          {playlist.description}
        </p>
      </div>
    </button>
  );
};

export default PlaylistCardShort;
