import { createAsyncThunk } from '@reduxjs/toolkit';
import News from '../service/News';
import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } from './newsReducer';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(fetchNewsRequest());
    const newsService = new News(); 
    try {
      const data = await newsService.getNews(); 
      thunkAPI.dispatch(fetchNewsSuccess(data.articles));
    } catch (error) {
      thunkAPI.dispatch(fetchNewsFailure(error.message));
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);
export const setFilter = (filter) =>({
  type: 'SET_FILTER',
  payload: filter,
});

