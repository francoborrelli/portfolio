import { FC, memo } from 'react';

import './styles.scss';
import { useNavigate } from 'react-router-dom';

export const Page404: FC = memo(() => {
  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <div className='container'>
        <h3>Page not available</h3>
        <p>Something went wrong, please try again later.</p>

        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
});

Page404.displayName = 'Page404';

export default Page404;
