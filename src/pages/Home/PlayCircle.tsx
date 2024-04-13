import { FC } from 'react';

interface PlayCircleProps {
  size?: number;
  big?: boolean;
}

export const PlayCircle: FC<PlayCircleProps> = ({ size = 20, big }) => {
  return (
    <span className={big ? 'circle-play big' : 'circle-play'}>
      <span>
        <svg
          style={{ height: size }}
          data-encore-id='icon'
          role='img'
          aria-hidden='true'
          viewBox='0 0 16 16'
        >
          <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'></path>
        </svg>
      </span>
    </span>
  );
};
