import { Suspense, lazy, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const PlaylistView = lazy(() => import('./Playlist'));

const MainSection = () => {
  const container = useRef<HTMLDivElement>(null);

  const routes = [
    { path: '', element: <Home /> },
    { path: '/profile', element: <Profile /> },
    { path: '/playlist/:playlistId', element: <PlaylistView container={container} /> },
  ];

  return (
    <div className='Main-section' ref={container}>
      <div style={{ minHeight: 'calc(100vh - 200px)', width: '100%' }}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Suspense>{route.element}</Suspense>}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default MainSection;
