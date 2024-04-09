import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import { Col, ConfigProvider, Row } from 'antd';

// Components
import PlayingBar from './components/PlayingBar';
import MainSection from './components/MainSection';
import Navigation from './components/Navbar/Navigation';
import { LanguageModal } from './components/Common/LanguageModal';

// Utils
import i18next from 'i18next';
import { useEffect } from 'react';

// Constants
import { playlists } from './constants/cv';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, useAppSelector } from './store/store';
import { PlayingNow } from './components/NowPlaying';
import { libraryActions } from './store/slices/library';

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
      <Router basename='portfolio'>
        <div style={{ padding: 10 }}>
          <Row justify='end' gutter={[8, 8]} wrap style={{ height: 'calc(98vh - 90px)' }}>
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
              {/* Left panel - Navigation */}
              <MainSection playlists={playlists} />
            </Col>

            <Col xs={0} md={!!hasDetails ? 6 : 0}>
              <PlayingNow />
            </Col>
          </Row>
        </div>
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
