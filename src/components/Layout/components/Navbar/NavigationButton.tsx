import type { FC } from 'react';
import { useAppSelector } from '../../../../store/store';
import { Tooltip } from '../../../Tooltip';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
  icon: JSX.Element;
}
const NavigationButton: FC<NavigationButtonProps> = ({ onClick, text, icon }) => {
  const collapsed = useAppSelector((state) => state.library.collapsed);

  if (collapsed) {
    return (
      <Tooltip placement='right' title={text}>
        <button
          style={{ justifyContent: 'center' }}
          className='text-gray-200 hover:text-white flex flex-row items-center space-x-4 w-full'
          onClick={onClick}
        >
          {icon}
        </button>
      </Tooltip>
    );
  }

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
