import { memo, type FC, type ReactNode } from 'react';

import { Col, Row } from 'antd';
import { CloseIcon } from '../../../../Icons';

// Redux
import { libraryActions } from '../../../../../store/slices/library';
import { useAppDispatch } from '../../../../../store/store';

interface NowPlayingLayoutProps {
  children: ReactNode;
  title?: string;
}

const CloseButton = memo(() => {
  const dispatch = useAppDispatch();

  return (
    <div className='playing-section-close-button'>
      <button
        onClick={() => {
          dispatch(libraryActions.removeSongPlaying());
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
});

CloseButton.displayName = 'CloseButton';

export const NowPlayingLayout: FC<NowPlayingLayoutProps> = memo((props) => {
  return (
    <div className='playing-section'>
      <Row align='middle'>
        <Col span={20}>
          {props.title ? <p className='playing-section-title'>{props.title}</p> : null}
        </Col>
        <Col span={4}>
          <CloseButton />
        </Col>
      </Row>

      {props.children}
    </div>
  );
});

NowPlayingLayout.displayName = 'NowPlayingLayout';
