import { Drawer } from 'antd';
import { PlayingNow } from './Layout/components/NowPlaying';
import { useAppSelector } from '../store/store';
import { memo } from 'react';

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
