import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Home';
import PlaylistView from './Playlist';

// Interfaces
import type { Playlist } from '../interfaces/types';

const MainSection = ({ playlists }: { playlists: Playlist[] }) => {
  return (
    <div className='Main-section'>
      <div style={{ minHeight: 'calc(100vh - 200px)', width: '100%' }}>
        <Routes>
          <Route path='/' element={<Home playlists={playlists} />} />
          <Route path='/playlist/:playlistId' element={<PlaylistView playlists={playlists} />} />
        </Routes>
      </div>

      {/* <div>
        <Divider />
        <div className='text-white' style={{ paddingLeft: 20 }}>
          © 2024 Franco Borrelli
        </div>
      </div> */}
    </div>
  );
};

export default MainSection;
