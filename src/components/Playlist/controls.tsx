import { Col, Row, Space } from 'antd';
import { PlayCircle } from '../Home/PlayCircle';
import { MenuDots, OrderListIcon } from '../Icons';
import { Tooltip } from '../Common/Tooltip';
import { useTranslation } from 'react-i18next';

export const PlaylistControls = () => {
  const [t] = useTranslation(['playlist']);

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
            <Tooltip title={t('Order')}>
              <button>
                <OrderListIcon />
              </button>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
