import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Interfaces
import type { Playlist } from '../interfaces/types';

// Pages
const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const PlaylistView = lazy(() => import('./Playlist'));

const routes = [
  { path: '', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/playlist/:playlistId', element: <PlaylistView /> },
];

const MainSection = ({ playlists }: { playlists: Playlist[] }) => {
  return (
    <div className='Main-section'>
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
