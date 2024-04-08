import { Col, Row, Space } from 'antd';
import { PlayCircle } from '../Home/PlayCircle';
import { MenuDots } from '../Icons';

export const PlaylistControls = () => {
  return (
    <div className='playlist-controls'>
      <Row>
        <Col>
          <Space>
            <PlayCircle size={30} big />
            <MenuDots />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
