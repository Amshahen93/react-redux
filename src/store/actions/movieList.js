import axios from '../../axios/axios-quiz';
import {GETTING_FILTER_DATA,  GETTING_ERROR, START_LOADER, CLEAR_MOVIES, STOP_LOADING} from './actionTypes'

export function fetchMovies (text) {
    return async dispatch => {
         try {  
            dispatch(startLoading())          
            const response = await axios.get(`search?keyword=${text}`); 
            
            let movies = [];
            movies = response.data;
            console.log(movies);
                    dispatch(fetchMoviesSuccess(movies))
        } catch(e) {
            dispatch(fetchMoviesError(e))
        }
    }
}
export function startLoading() {
    return {
        type: START_LOADER 
    }
}
export function stopLoading() {
    return{
        type: STOP_LOADING
    }
}
export function clearMovies() {
    return {
        type: CLEAR_MOVIES
    }
}

export function fetchMoviesSuccess(movies) {
    return {
        type: GETTING_FILTER_DATA,
        movies
    }
}
export function fetchMoviesError(error) {
    return {
        type: GETTING_ERROR,
        error
    }

}