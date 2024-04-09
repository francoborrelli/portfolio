import { createSlice } from '@reduxjs/toolkit';

import type { Song } from '../../interfaces/types';

interface LibraryState {
  songPlaying: null | Song;

  queue: boolean;
  collapsed: boolean;
  detailsOpen: boolean;
}

const initialState: LibraryState = {
  collapsed: false,
  songPlaying: null,
  detailsOpen: false,
  queue: false,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    toggleLibrary(state) {
      if (!state.detailsOpen) {
        state.collapsed = !state.collapsed;
      }
    },
    setSongPlaying(state, action) {
      state.songPlaying = action.payload;
      state.detailsOpen = true;
      state.queue = false;
      state.collapsed = true;
    },
    toggleSongPlaying(state) {
      if (state.queue) {
        state.queue = false;
      } else {
        state.detailsOpen = !state.detailsOpen;
      }
    },
    removeSongPlaying(state) {
      state.detailsOpen = false;
      state.queue = false;
    },
    openQueue(state) {
      state.queue = true;
      state.collapsed = true;
      state.detailsOpen = true;
    },
    closeQueue(state) {
      state.queue = false;
      state.detailsOpen = false;
    },
  },
});

const shouldOpenDetails = (state: LibraryState) =>
  state.detailsOpen && (!!state.songPlaying || state.queue);

export const libraryActions = librarySlice.actions;

export default librarySlice.reducer;
