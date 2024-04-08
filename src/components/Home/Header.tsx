import { Space } from 'antd';
import HistoryNavigation from '../Navbar/HistoryNavigation';
import { News } from '../Icons';

const Header = ({ opacity }: { opacity: number }) => {
  return (
    <div
      className={`flex r-0 w-full flex-row items-center justify-between bg-gray-900 rounded-t-md z-10`}
      style={{ backgroundColor: `rgba(12, 12, 12, ${opacity}%)` }}
    >
      <HistoryNavigation />

      <div className='flex flex-row items-center'>
        <Space>
          <div className='news'>
            <News />
          </div>

          <img
            className='avatar'
            id='user-avatar'
            alt='User Avatar'
            src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
          />
        </Space>
      </div>
    </div>
  );
};

export default Header;
