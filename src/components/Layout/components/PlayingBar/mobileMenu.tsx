import { useNavigate } from 'react-router-dom';
import { HomeIcon, LibraryIcon, SearchIcon } from '../../../Icons';
import { useTranslation } from 'react-i18next';

export const MobileMenu = () => {
  const navigate = useNavigate();

  const [t] = useTranslation(['playingBar']);

  return (
    <footer className='mobile-menu'>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        <HomeIcon />
        <p>{t('Home')}</p>
      </button>
      <a href='https://github.com/francoborrelli/portfolio' target='_blank' rel='noreferrer'>
        <SearchIcon />
        <p>{t('Source code')}</p>
      </a>
      <a href='/about'>
        <LibraryIcon />
        <p>{t('Your Library')}</p>
      </a>
    </footer>
  );
};
