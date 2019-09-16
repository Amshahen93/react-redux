import React from 'react';
import Classes from './Movie.css';

const Movie = props => {
    return (
        <div className = {Classes.Movie}>
            <img alt='' src = {props.movie.Poster} className = {Classes.image}/>
            <h3 className = {Classes.title}>{props.movie.Title + ' '+  props.movie.Year}</h3>
        </div>
    )
}

export default Movie
