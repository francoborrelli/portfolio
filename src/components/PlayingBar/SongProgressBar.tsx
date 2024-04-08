// Components
import { Slider } from '../Common/Slider/Slider';

// Utils
import { useEffect, useState } from 'react';
import { secondsToTime } from '../../utils';

// Redux
import { useAppSelector } from '../../store/store';
import { setCurrentTimeForPlayer } from '../../player';

const SongProgressBar = () => {
  const [current, setCurrent] = useState(0);

  const duration = useAppSelector((state) => state.playingBar.duration);

  useEffect(() => {
    setCurrent(0);
  }, [duration]);

  useEffect(() => {
    const id = setInterval(
      () =>
        setCurrent((oldCount) => {
          if (oldCount >= duration) {
            return 0;
          }
          return oldCount + 1;
        }),
      1000
    );
    return () => {
      clearInterval(id);
    };
  }, [duration]);

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='text-white mr-2 text-xs'>{secondsToTime(current)}</div>
      <div style={{ width: '100%' }}>
        <Slider
          value={current / duration}
          isEnabled
          onChange={(value) => {
            const seconds = Math.floor(value * duration);
            setCurrent(seconds);
            setCurrentTimeForPlayer(seconds);
          }}
        />
      </div>
      <div className='text-white ml-2 text-xs'>{secondsToTime(duration)}</div>
    </div>
  );
};

export default SongProgressBar;
