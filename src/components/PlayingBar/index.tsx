import SongDetails from './SongDetails';
import PlayControls from './PlayControls';
import ExtraControlButtons from './ExtraButtons';

const NowPlayingBar = () => {
  return (
    <div className='w-full bg-black p-4 flex items-center justify-between h-full mobile-hidden'>
      <SongDetails />
      <PlayControls />
      <ExtraControlButtons />
    </div>
  );
};

export default NowPlayingBar;
