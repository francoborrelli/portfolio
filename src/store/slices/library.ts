import { createSlice } from '@reduxjs/toolkit';

import type { Song } from '../../interfaces/types';

const initialState: { collapsed: boolean; songPlaying: null | Song; detailsOpen: boolean } = {
  collapsed: false,
  songPlaying: null,
  detailsOpen: false,
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
      state.collapsed = true;
    },
    toggleSongPlaying(state) {
      state.detailsOpen = !state.detailsOpen;
    },
    removeSongPlaying(state) {
      state.detailsOpen = false;
    },
  },
});

export const libraryActions = librarySlice.actions;

export default librarySlice.reducer;
