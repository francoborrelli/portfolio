import { Input, Space } from 'antd';
import NavigationButton from './NavigationButton';
import { ActiveHomeIcon, BrowseIcon, HomeIcon, SearchIcon } from '../../../Icons';

// Utils
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(['navbar']);

  const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

  return (
    <Space size={10} align='center'>
      <NavigationButton
        text={t('Home')}
        icon={isHome ? <ActiveHomeIcon /> : <HomeIcon />}
        onClick={() => navigate('/')}
      />

      <Input
        size='large'
        className='search-input'
        prefix={<SearchIcon />}
        suffix={<BrowseIcon />}
        placeholder={t('SearchPlaceholder')}
      />
    </Space>
  );
};
