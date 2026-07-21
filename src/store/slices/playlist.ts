import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  PlaylistOrder,
  PlaylistSortBy,
  PlaylistSortDirection,
} from '../../interfaces/types';

export type { PlaylistSortBy, PlaylistSortDirection };

const initialState: {
  order: PlaylistOrder;
  search: string;
  sortBy: PlaylistSortBy;
  sortDirection: PlaylistSortDirection;
} = {
  order: 'ALL',
  search: '',
  sortBy: 'custom',
  sortDirection: 'asc',
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<{ order: PlaylistOrder }>) {
      state.order = action.payload.order;
    },
    resetOrder(state, action: PayloadAction<{ order?: PlaylistOrder }>) {
      state.order = action.payload.order || 'ALL';
      state.search = '';
      state.sortBy = 'custom';
      state.sortDirection = 'asc';
    },
    setSearch(state, action: PayloadAction<{ search: string }>) {
      state.search = action.payload.search;
    },
    setSort(
      state,
      action: PayloadAction<{ sortBy: PlaylistSortBy; sortDirection?: PlaylistSortDirection }>
    ) {
      state.sortBy = action.payload.sortBy;
      state.sortDirection = action.payload.sortDirection || 'asc';
    },
    toggleSort(state, action: PayloadAction<{ sortBy: Exclude<PlaylistSortBy, 'custom'> }>) {
      if (state.sortBy === action.payload.sortBy) {
        if (state.sortDirection === 'asc') {
          state.sortDirection = 'desc';
          return;
        }
        state.sortBy = 'custom';
        state.sortDirection = 'asc';
        return;
      }
      state.sortBy = action.payload.sortBy;
      state.sortDirection = 'asc';
    },
  },
});

export const playlistActions = playlistSlice.actions;

export default playlistSlice.reducer;
