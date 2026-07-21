import { memo, useEffect, useState } from 'react';

// Components
import { Drawer } from 'antd';
import { PlayingNow } from './Layout/components/NowPlaying';

// Redux
import { useAppSelector } from '../store/store';

const MOBILE_MQ = '(max-width: 900px)';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_MQ).matches);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_MQ);
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

export const PlayingNowDrawer = memo(() => {
  const isMobile = useIsMobile();
  const open = useAppSelector((state) => state.library.detailsOpen);
  if (!isMobile) return null;
  return (
    <div className='playing-now-drawer'>
      <Drawer open={open}>
        <PlayingNow />
      </Drawer>
    </div>
  );
});

PlayingNowDrawer.displayName = 'PlayingNowDrawer';
