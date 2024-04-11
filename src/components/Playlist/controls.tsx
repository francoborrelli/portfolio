import { Col, Dropdown, Row, Space } from 'antd';

import { Tooltip } from '../Common/Tooltip';
import { PlayCircle } from '../Home/PlayCircle';
import { MenuDots, OrderListIcon } from '../Icons';

// Utils
import { useTranslation } from 'react-i18next';

// Redux
import { useAppDispatch } from '../../store/store';

// Interfaces
import type { FC } from 'react';
import type { Playlist } from '../../interfaces/types';

export const PlaylistControls: FC<{ playlist: Playlist }> = ({ playlist }) => {
  const dispatch = useAppDispatch();

  const [tor] = useTranslation(['order']);
  const [t] = useTranslation(['playlist']);

  const filters = ['ALL', ...(playlist.filters || [])];

  const items = filters.map((filter) => ({
    key: filter,
    label: tor(filter),
    onClick: () => dispatch({ type: 'playlist/setFilter', payload: filter }),
  }));

  return (
    <div className='playlist-controls'>
      <Row justify='space-between' align='middle'>
        <Col>
          <Space>
            <PlayCircle size={30} big />
            <MenuDots />
          </Space>
        </Col>
        <Col>
          <Space>
            <Tooltip title={t('Filter')}>
              <Dropdown menu={{ items }}>
                <button>
                  <OrderListIcon />
                </button>
              </Dropdown>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
