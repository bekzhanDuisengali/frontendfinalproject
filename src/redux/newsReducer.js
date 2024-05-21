import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    news: [],
    loading: false,
    error: null
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchNewsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchNewsSuccess(state, action) {
            state.news = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchNewsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;

export default newsSlice.reducer;
