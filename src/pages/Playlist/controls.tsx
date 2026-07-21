import { Col, Dropdown, Row, Space } from 'antd';

import { PlaylistSearch } from './search';
import { PlayCircleButton } from './playCircle';
import { Tooltip } from '../../components/Tooltip';
import { MenuDots, OrderListIcon } from '../../components/Icons';

// Utils
import { useTranslation } from 'react-i18next';

// Redux
import { playlistActions } from '../../store/slices/playlist';
import { useAppDispatch, useAppSelector } from '../../store/store';

// Interfaces
import type { FC } from 'react';
import type { Playlist, PlaylistOrder } from '../../interfaces/types';

export const PlaylistControls: FC<{ playlist: Playlist }> = ({ playlist }) => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.playlist.order);

  const [tor] = useTranslation(['order']);
  const [t] = useTranslation(['playlist']);

  const filters: PlaylistOrder[] = ['ALL', ...(playlist.filters || [])];

  const items = filters.map((filter) => ({
    key: filter,
    label: tor(filter),
    onClick: () => dispatch(playlistActions.setOrder({ order: filter })),
  }));

  return (
    <div className='playlist-controls'>
      <Row justify='space-between' align='middle'>
        <Col>
          <Space>
            <PlayCircleButton />
            <MenuDots />
          </Space>
        </Col>
        <Col>
          <Space>
            <PlaylistSearch />
            <Tooltip title={t('Filter')}>
              <Dropdown
                placement='bottomRight'
                menu={{ items, selectedKeys: [order].filter((o) => o !== 'ALL') }}
              >
                <button className='order-button'>
                  <Space align='center'>
                    <span
                      className={`order-button__label ${
                        order === 'ALL' ? 'order-button__label--hidden' : ''
                      }`}
                    >
                      {tor(order)}
                    </span>
                    <OrderListIcon />
                  </Space>
                </button>
              </Dropdown>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
