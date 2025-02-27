import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';

export const nameRequest = createAsyncThunk<TVList[], string>(
  'TVShows/ nameRequest',
  async (inputWord) => {
    const response = await axiosApi.get<TV_API[]>(`search/shows?q=${inputWord}`);
    const list: TVList[] = response.data.map((show) => {
      return {
        id: show.show.id,
        name: show.show.name,
      };
    });
    return list;
  }
);

export const idRequest = createAsyncThunk<TVShow, number>(
  'TVShows/idRequest',
  async (id) => {
    const response = await axiosApi<TVShowAPI>(`shows/${id}`);
    const showApi = response.data;
    const show: TVShow = {
      id: showApi.id,
      name: showApi.name,
      type: showApi.type,
      language: showApi.language,
      genres: showApi.genres,
      status: showApi.status,
      country: showApi.country,
      premiered: showApi.premiered,
      ended: showApi.ended,
      officialSite: showApi.officialSite,
      rating: showApi.rating.average,
      image: showApi.image,
    };
    console.log(show);
    return show;
  }
);