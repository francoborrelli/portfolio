import { Drawer } from 'antd';
import { PlayingNow } from '../../NowPlaying';
import { useAppSelector } from '../../../store/store';

export const PlayingNowDrawer = () => {
  const open = useAppSelector((state) => state.library.detailsOpen);
  if (window.innerWidth > 973) return null;
  return (
    <div className='playing-now-drawer'>
      <Drawer open={open}>
        <PlayingNow />
      </Drawer>
    </div>
  );
};
