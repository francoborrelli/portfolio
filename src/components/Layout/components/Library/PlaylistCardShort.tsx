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
            <p className='library-tooltip-subtitle'>Playlist • Franco Borrelli</p>
          </div>
        }
      >
        <span className='library-card-hitbox'>
          <button className='library-card collapsed' onClick={handleClick}>
            <img src={playlist.getImage(language)} alt='' />
          </button>
        </span>
      </Tooltip>
    );
  }

  return (
    <button className='library-card' onClick={handleClick}>
      <img src={playlist.getImage(language)} alt='' />
      <div className='library-card-meta'>
        <h3 className='text-md font-semibold text-white library-card-title'>{cvt(playlist.name)}</h3>

        <p className='text-md font-semibold text-white library-card-subtitle'>
          Playlist • {playlist.songs.length} {t('songs')}
        </p>
      </div>
    </button>
  );
});

PlaylistCardShort.displayName = 'PlaylistCardShort';

export default PlaylistCardShort;
