import './styles/App.scss';

import { Col, ConfigProvider, Row } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import PlayingBar from './components/PlayingBar';
import MainSection from './components/MainSection';
import { PlayingNow } from './components/NowPlaying';
import Navigation from './components/Navbar/Navigation';
import { LanguageModal } from './components/Common/LanguageModal';
import { PlayingNowDrawer } from './components/Common/PlayingNowDrawer';

// Utils
import i18next from 'i18next';
import { useEffect } from 'react';

// Constants
import { playlists } from './constants/cv';

// Redux
import { Provider } from 'react-redux';
import { libraryActions } from './store/slices/library';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, useAppSelector } from './store/store';

window.addEventListener('resize', () => {
  const vh = window.innerWidth;
  if (vh < 950) {
    store.dispatch(libraryActions.collapseLibrary());
  }
});

const RootComponent = () => {
  const language = useAppSelector((state) => state.language.language);
  const hasDetails = useAppSelector((state) => state.library.detailsOpen);
  const libraryCollapsed = useAppSelector((state) => state.library.collapsed);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <>
      <LanguageModal />
      <PlayingNowDrawer />

      <Router basename='portfolio'>
        <div className='main-container'>
          <Row justify='end' gutter={[8, 8]} wrap style={{ height: 'calc(100vh - 125px)' }}>
            <Col
              xs={0}
              md={libraryCollapsed || !!hasDetails ? 3 : 6}
              xl={libraryCollapsed || !!hasDetails ? 2 : 6}
            >
              {/* Left panel - Navigation */}
              <Navigation playlists={playlists} />
            </Col>

            <Col
              xs={24}
              md={!!hasDetails ? 15 : libraryCollapsed ? 21 : 18}
              xl={!!hasDetails ? 16 : libraryCollapsed ? 22 : 18}
              className='Main-section-col'
            >
              {/* Home | Playlists */}
              <MainSection />
            </Col>

            {/* Queue | Song details */}
            <Col xs={0} md={!!hasDetails ? 6 : 0}>
              <PlayingNow />
            </Col>
          </Row>
        </div>

        {/* Player bar */}
        <footer>
          <PlayingBar />
        </footer>
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
