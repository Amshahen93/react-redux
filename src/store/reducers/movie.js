import {START_LOADER, GETTING_FILTER_DATA, GETTING_ERROR, CLEAR_MOVIES} from '../actions/actionTypes';
const initialState = {
    searchText: '',
    load: false,
    movies: [],
    error: null
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADER: 
            return {
                ...state, movies: [], load: true, error: null
            }
        case CLEAR_MOVIES: 
            return {
                ...state, load: false, movies: [], error: null
            }
        case GETTING_FILTER_DATA:
            return {
                ...state, load: false, movies: action.movies
            }
        case GETTING_ERROR: 
            return {
                ...state, load: false, movies: [], error: 'No results'
            }
        default: 
            return state;
    }
}