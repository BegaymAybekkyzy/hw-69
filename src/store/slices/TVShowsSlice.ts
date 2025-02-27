import { createSlice } from '@reduxjs/toolkit';
import { idRequest, nameRequest } from '../thunks/TVShowsThunks.ts';
import { RootState } from '../../app/store.ts';

interface TVShowsState {
  loading: boolean;
  TVShow: TVShow | null;
  TVList: TVList[];
}

const initialState: TVShowsState = {
  loading: false,
  TVShow: null,
  TVList: [],
};

export const selectTVShowList = (state: RootState) => state.TVShows.TVList;
export const selectTVShow = (state: RootState) => state.TVShows.TVShow;
export const selectTLoading = (state: RootState) => state.TVShows.TVShow;


const TVShowsSlice = createSlice({
  name: 'TVShows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(nameRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(nameRequest.fulfilled, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
        state.TVList = payload;
      })
      .addCase(nameRequest.rejected, (state => {
        state.loading = false;
      }))

      .addCase(idRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(idRequest.fulfilled, ((state, {payload}) => {
        state.loading = false;
        state.TVShow = payload;
      }))
      .addCase(idRequest.rejected, (state => {
        state.loading = false;
      }));
  }
});

export const TVShowsReducer = TVShowsSlice.reducer;