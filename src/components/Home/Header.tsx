import { Space } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HistoryNavigation from '../Navbar/HistoryNavigation';

const Header = ({ opacity }: { opacity: number; title?: string }) => {
  const { t } = useTranslation(['navbar']);

  return (
    <div
      className={`flex r-0 w-full flex-row items-center justify-between bg-gray-900 rounded-t-md z-10`}
      style={{ backgroundColor: `rgba(12, 12, 12, ${opacity}%)` }}
    >
      <Space size={20}>
        <HistoryNavigation />
        {/* <h3 className='header-title'>{title}</h3> */}
      </Space>

      <div className='flex flex-row items-center'>
        <Space>
          <a
            target='_blank'
            rel='noreferrer'
            className='contact-me'
            href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=francoborrelli96@gmail.com&su=SUBJECT'
          >
            <span>{t('Contact me')}</span>
          </a>

          {/*
          <div className='news'>
            <News />
          </div> */}

          <Link to='/profile'>
            <img
              className='avatar'
              id='user-avatar'
              alt='User Avatar'
              src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
            />
          </Link>
        </Space>
      </div>
    </div>
  );
};

export default Header;
