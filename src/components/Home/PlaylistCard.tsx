import { PlayCircle } from './PlayCircle';

import { useTranslation } from 'react-i18next';
import type { Playlist } from '../../interfaces/types';

const PlaylistCard = ({ playlist, onClick }: { playlist: Playlist; onClick: () => void }) => {
  const [t] = useTranslation(['cv']);

  const title = t(playlist.name);
  const description = playlist.description;

  return (
    <div
      style={{ cursor: 'pointer' }}
      className='playlist-card relative rounded-lg overflow-hidden  hover:bg-spotify-gray-lightest'
      onClick={onClick}
    >
      <div
        style={{ position: 'relative' }}
        className='aspect-square md:aspect-w-1 md:aspect-h-1/2 lg:aspect-w-1 lg:aspect-h-3/4 xl:aspect-w-1 xl:aspect-h-4/5 p-4'
      >
        <img src={playlist.imageUrl} alt='' style={{ borderRadius: 5, height: '100%' }} />
        <div className='circle-play-div'>
          <PlayCircle />
        </div>
      </div>
      <div className='playlist-card-info'>
        <h3 className='text-md font-semibold text-white'>{title}</h3>
        <p className='text-gray-600 mt-2'>{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
