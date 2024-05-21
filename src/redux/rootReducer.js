import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    news: newsReducer,
    filter: filterReducer,
});

export default rootReducer;
