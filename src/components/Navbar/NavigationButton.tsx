import type { FC } from 'react';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
  icon: JSX.Element;
}
const NavigationButton: FC<NavigationButtonProps> = ({ onClick, text, icon }) => {
  return (
    <button
      className='text-gray-200 hover:text-white flex flex-row items-center space-x-4 w-full'
      onClick={onClick}
    >
      {icon}
      <span className='Navigation-button'>{text}</span>
    </button>
  );
};

export default NavigationButton;
