import ControlButtons from './ControlButtons';
import SongProgressBar from './SongProgressBar';

const PlayControls = () => {
  return (
    <div className='flex flex-col items-center w-2/5'>
      <ControlButtons />
      <SongProgressBar />
    </div>
  );
};

export default PlayControls;
