import { combineReducers } from 'redux';
import movieReducer from './movie';

export default combineReducers({
    movies: movieReducer,
})