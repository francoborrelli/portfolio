import { createSlice } from '@reduxjs/toolkit';

const initialState: { collapsed: boolean } = {
  collapsed: false,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    toggleLibrary(state) {
      state.collapsed = !state.collapsed;
    },
  },
});

export const libraryActions = librarySlice.actions;

export default librarySlice.reducer;
