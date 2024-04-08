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

const RootComponent = () => {
  const language = useAppSelector((state) => state.language.language);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <>
      <LanguageModal />
      <Router>
        <div style={{ padding: 10 }}>
          <Row justify='end' gutter={[8, 8]} wrap style={{ height: 'calc(98vh - 90px)' }}>
            <Col xs={0} lg={6}>
              {/* Left panel - Navigation */}
              <Navigation playlists={playlists} />
            </Col>
            <Col xs={24} lg={18}>
              {/* Left panel - Navigation */}
              <MainSection playlists={playlists} />
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
