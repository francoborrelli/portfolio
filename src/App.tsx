import './styles/App.scss';

// Components
import { ConfigProvider } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Utils
import i18next from 'i18next';
import { Suspense, lazy, useEffect, useRef } from 'react';

// Redux
import { Provider } from 'react-redux';
import { libraryActions } from './store/slices/library';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, useAppSelector } from './store/store';
import { AppLayout } from './components/Layout';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const PlaylistView = lazy(() => import('./pages/Playlist'));

window.addEventListener('resize', () => {
  const vh = window.innerWidth;
  if (vh < 950) {
    store.dispatch(libraryActions.collapseLibrary());
  }
});

const RootComponent = () => {
  const container = useRef<HTMLDivElement>(null);
  const language = useAppSelector((state) => state.language.language);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    i18next.changeLanguage(language);
  }, [language]);

  const routes = [
    { path: '', element: <Home /> },
    { path: '/profile', element: <Profile /> },
    { path: '/playlist/:playlistId', element: <PlaylistView container={container} /> },
  ];

  return (
    <>
      <Router basename='portfolio'>
        <AppLayout>
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
        </AppLayout>
      </Router>
    </>
  );
};

function App() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
