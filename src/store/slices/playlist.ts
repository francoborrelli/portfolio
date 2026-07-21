import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { order: string; search: string } = {
  order: 'ALL',
  search: '',
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<{ order: string }>) {
      state.order = action.payload.order;
    },
    resetOrder(state, action: PayloadAction<{ order?: string }>) {
      state.order = action.payload.order || 'ALL';
      state.search = '';
    },
    setSearch(state, action: PayloadAction<{ search: string }>) {
      state.search = action.payload.search;
    },
  },
});

export const playlistActions = playlistSlice.actions;

export default playlistSlice.reducer;
