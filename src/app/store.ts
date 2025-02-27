import { configureStore } from '@reduxjs/toolkit';
import { TVShowsReducer } from '../store/slices/TVShowsSlice.ts';

export const store = configureStore({
  reducer: {
    TVShows: TVShowsReducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;