import { useNavigate } from 'react-router-dom';

const ForwardBackwardsButton = ({ flip }: { flip: boolean }) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateForward = () => {
    navigate(1);
  };

  return (
    <button
      className='bg-black p-2 rounded-full h-4/6 aspect-square h-8'
      onClick={flip ? navigateBack : navigateForward}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/forward.svg`}
        alt={flip ? 'Backwards' : 'Forward'}
        className={`w-full h-full ${flip ? 'rotate-180' : ''}`}
      />
    </button>
  );
};

export default ForwardBackwardsButton;
