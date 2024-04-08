import { useNavigate } from 'react-router-dom';
import { HomeIcon, LibraryIcon, SearchIcon } from '../Icons';

export const MobileMenu = () => {
  const navigate = useNavigate();

  return (
    <footer className='mobile-menu'>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        <HomeIcon />
        <p>Home</p>
      </button>
      <a href='https://github.com/francoborrelli/portfolio' target='_blank' rel='noreferrer'>
        <SearchIcon />
        <p>Source code</p>
      </a>
      <a href='/about'>
        <LibraryIcon />
        <p>Your Library</p>
      </a>
    </footer>
  );
};
