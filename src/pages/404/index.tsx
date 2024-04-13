import { FC, memo } from 'react';

import './styles.scss';

export const Page404: FC = memo(() => {
  return (
    <div className='page404-Container'>
      <h3>Page not available</h3>
      <p>Something went wrong, please try again later.</p>
    </div>
  );
});

Page404.displayName = 'Page404';

export default Page404;
