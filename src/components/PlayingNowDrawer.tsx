import { memo } from 'react';

// Components
import { Drawer } from 'antd';
import { PlayingNow } from './Layout/components/NowPlaying';

// Redux
import { useAppSelector } from '../store/store';

export const PlayingNowDrawer = memo(() => {
  const open = useAppSelector((state) => state.library.detailsOpen);
  if (window.innerWidth > 973) return null;
  return (
    <div className='playing-now-drawer'>
      <Drawer open={open}>
        <PlayingNow />
      </Drawer>
    </div>
  );
});

PlayingNowDrawer.displayName = 'PlayingNowDrawer';
