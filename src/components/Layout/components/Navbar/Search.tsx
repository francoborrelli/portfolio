import { Input, Space } from 'antd';
import type { InputRef } from 'antd';
import NavigationButton from './NavigationButton';
import { ActiveHomeIcon, BrowseIcon, HomeIcon, SearchIcon } from '../../../Icons';

// Utils
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';

const INITIAL_VALUE = window.location.href.includes('/search/')
  ? window.location.href.split('/').reverse()[0]
  : '';

const isMac =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform);

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(['navbar']);
  const inputRef = useRef<InputRef>(null);

  const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus({ cursor: 'all' });
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Space size={10} align='center'>
      <NavigationButton
        text={t('Home')}
        icon={isHome ? <ActiveHomeIcon /> : <HomeIcon />}
        onClick={() => navigate('/')}
      />

      <Input
        ref={inputRef}
        size='large'
        className='search-input'
        prefix={<SearchIcon />}
        suffix={
          <span className='search-suffix'>
            <kbd className='search-shortcut' aria-hidden>
              {isMac ? '⌘K' : 'Ctrl+K'}
            </kbd>
            <span className='search-suffix-divider' aria-hidden />
            <BrowseIcon />
          </span>
        }
        defaultValue={INITIAL_VALUE}
        placeholder={t('SearchPlaceholder')}
        onChange={(e) => {
          const value = e.target.value;
          if (value === '') {
            navigate('/');
          } else {
            navigate(`/search/${e.target.value}`);
          }
        }}
      />
    </Space>
  );
};
