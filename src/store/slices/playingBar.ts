import { mute, pauseAudio, play, setPlayerVolume, startAudio } from '../../player';

// Constants
import { AVAILABLE_SONGS } from '../../constants/songs';
import { INITIAL_VOLUME } from '../../constants/player';

// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  muted: boolean;
  volume: number;
  looping: boolean;
  playing: boolean;
  currentSong: number;
  duration: number;
} = {
  looping: true,
  muted: false,
  currentSong: 0,
  playing: false,
  duration: 0,
  volume: INITIAL_VOLUME,
};

const playingBarSlice = createSlice({
  name: 'playingBar',
  initialState,
  reducers: {
    toggleLooping(state) {
      state.looping = !state.looping;
    },
    setPlaying(state) {
      state.playing = true;
      startAudio();
      setPlayerVolume(state.volume);
    },
    setPause(state) {
      state.playing = false;
      pauseAudio();
    },
    nextSong(state) {
      state.currentSong++;
      if (state.currentSong >= AVAILABLE_SONGS.length) {
        state.currentSong = 0;
      }
      state.playing = true;
      play(state.currentSong);
      setPlayerVolume(state.volume);
    },
    previousSong(state) {
      state.currentSong--;
      if (state.currentSong < 0) {
        state.currentSong = AVAILABLE_SONGS.length - 1;
      }
      state.playing = true;
      play(state.currentSong);
      setPlayerVolume(state.volume);
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setVolume(state, action: PayloadAction<{ volume: number }>) {
      state.volume = action.payload.volume;
      if (action.payload.volume === 0) {
        state.muted = true;
        mute();
      } else {
        state.muted = false;
        setPlayerVolume(action.payload.volume);
      }
    },
  },
});

export const getCurrentSongData = (state: { playingBar: typeof initialState }) => {
  return AVAILABLE_SONGS[state.playingBar.currentSong];
};

export const playingBarActions = playingBarSlice.actions;

export default playingBarSlice.reducer;
