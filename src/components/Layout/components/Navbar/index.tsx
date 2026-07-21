import { Col, Row } from 'antd';
import { memo } from 'react';
import HistoryNavigation from './HistoryNavigation';
import Header from './Header';
import { Search } from './Search';

export const Navbar = memo(() => {
  return (
    <Row align='middle' gutter={[16, 16]} className='navbar' justify='space-between'>
      <Col>
        <HistoryNavigation />
      </Col>

      <Col span={0} md={12} lg={10} xl={8} className='navbar-search-col'>
        <Search />
      </Col>

      <Col>
        <Header opacity={1} />
      </Col>
    </Row>
  );
});
