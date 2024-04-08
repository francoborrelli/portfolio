import { HomeIcon, LibraryIcon, SearchIcon } from '../Icons';

export const MobileMenu = () => (
  <footer className='mobile-menu'>
    <a className='link svelte-7c5rwx' href='/'>
      <HomeIcon />
      <p className='svelte-7c5rwx' data-svelte-h='svelte-6z05k5'>
        Home
      </p>
    </a>{' '}
    <a
      className='link svelte-7c5rwx'
      href='https://github.com/ssebastianoo/spotify-portfolio'
      target='_blank'
      rel='noreferrer'
    >
      <SearchIcon />
      <p className='svelte-7c5rwx' data-svelte-h='svelte-33z92y'>
        Source code
      </p>
    </a>{' '}
    <a className='link svelte-7c5rwx' href='/about'>
      <LibraryIcon />
      <p className='svelte-7c5rwx' data-svelte-h='svelte-8qxyfk'>
        Your Library
      </p>
    </a>
  </footer>
);
