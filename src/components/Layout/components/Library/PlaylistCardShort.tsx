import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Playlist } from '../../../../interfaces/types';
import { useAppSelector } from '../../../../store/store';
import { Tooltip } from '../../../Tooltip';

interface PlaylistCardShortProps {
  playlist: Playlist;
  onSelect: (name: string) => void;
}

const PlaylistCardShort = memo(({ playlist, onSelect }: PlaylistCardShortProps) => {
  const { t: cvt } = useTranslation(['cv']);
  const { t } = useTranslation(['playlist']);
  const language = useAppSelector((state) => state.language.language);
  const collapsed = useAppSelector((state) => state.library.collapsed);

  const handleClick = () => onSelect(playlist.name);

  if (collapsed) {
    return (
      <Tooltip
        placement='right'
        title={
          <div>
            <p>{cvt(playlist.name)}</p>
            <p style={{ fontSize: 13, color: 'gray', fontWeight: 400 }}>
              Playlist • Franco Borrelli
            </p>
          </div>
        }
      >
        <button
          style={{ borderRadius: 10, display: 'flex', justifyContent: 'center' }}
          className='library-card collapsed'
          onClick={handleClick}
        >
          <div className='image aspect-square h-full items-center'>
            <img src={playlist.getImage(language)} alt='' style={{ width: 52 }} />
          </div>
        </button>
      </Tooltip>
    );
  }

  return (
    <button style={{ borderRadius: 10 }} className='library-card' onClick={handleClick}>
      <div className='image aspect-square p-2 h-full items-center'>
        <img src={playlist.getImage(language)} alt='' style={{ width: 52 }} />
      </div>
      <div id='playlist-song-and-artist-name'>
        <h3 className='text-md font-semibold text-white' style={{ fontSize: 15, marginBottom: -5 }}>
          {cvt(playlist.name)}
        </h3>

        <p
          className='text-md font-semibold text-white'
          style={{
            fontSize: 13,
            opacity: 0.7,
            fontWeight: 400,
          }}
        >
          Playlist • {playlist.songs.length} {t('songs')}
        </p>
      </div>
    </button>
  );
});

PlaylistCardShort.displayName = 'PlaylistCardShort';

export default PlaylistCardShort;
