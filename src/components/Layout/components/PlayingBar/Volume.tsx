// Components
import { Space } from 'antd';
import { Tooltip } from '../../../Tooltip';
import { Slider } from '../../../Slider';
import { VolumeIcon, VolumeMuteIcon, VolumeOneIcon, VolumeTwoIcon } from '../../../Icons';

// Redux
import { playingBarActions } from '../../../../store/slices/playingBar';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

// I18n
import { useTranslation } from 'react-i18next';

const getIcon = (volume: number) => {
  if (volume === 0) {
    return <VolumeMuteIcon />;
  }

  if (volume < 0.4) {
    return <VolumeOneIcon />;
  }

  if (volume < 0.7) {
    return <VolumeTwoIcon />;
  }

  return <VolumeIcon />;
};

export const VolumeControls = () => {
  const { t } = useTranslation(['playingBar']);

  const dispatch = useAppDispatch();
  const muted = useAppSelector((state) => state.playingBar.muted);
  const volume = useAppSelector((state) => state.playingBar.volume);

  return (
    <div className='volume-control-container'>
      <Space className='volume-control-space'>
        <Tooltip title={muted ? t('Unmute') : t('Mute')}>
          <div
            onClick={() => {
              dispatch(playingBarActions.setVolume({ volume: muted ? volume : 0 }));
            }}
          >
            {getIcon(muted ? 0 : volume)}
          </div>
        </Tooltip>

        <div className='volume-slider-wrap flex items-center justify-between w-full'>
          <Slider
            isEnabled
            value={muted ? 0 : volume}
            onChange={(value) => {
              dispatch(playingBarActions.setVolume({ volume: value }));
            }}
          />
        </div>
      </Space>
    </div>
  );
};

export default VolumeControls;
