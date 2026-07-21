import { memo } from 'react';

// Components
import { Drawer } from 'antd';
import { PlayingNow } from './Layout/components/NowPlaying';

// Redux
import { useAppSelector } from '../store/store';
import { useIsMobile } from '../hooks/useIsMobile';

export const PlayingNowDrawer = memo(() => {
  const isMobile = useIsMobile();
  const open = useAppSelector((state) => state.library.detailsOpen);

  if (!isMobile) return null;

  return (
    <div className='playing-now-drawer'>
      <Drawer open={open}>{open ? <PlayingNow /> : null}</Drawer>
    </div>
  );
});

PlayingNowDrawer.displayName = 'PlayingNowDrawer';
