import React, { Component } from 'react';
import Loader from '../../components/UI/Loader/Loader'
import  Classes  from './MoviesList.css';
import { connect } from 'react-redux';
import {fetchMovies, clearMovies} from '../../store/actions/movieList'
import Input from './../../components/UI/Input/Input';
import Movie from './../../components/UI/Movie/Movie';

class MoviesList extends Component {
    searchTimer;
    state = {
        text: null
    }

    renderMovie() {
        return this.props.movies.map((movie, index) => {
            return(
                <div key = {index} className = 'col-6 col-md-4'>
                   <Movie movie = {movie}/> 
                </div>
            )
        })
    }
    inputHandler = (e) => {
        this.setState({text: e.target.value});
        this.setState()
        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(() => {
            if(this.state.text.length>2) { 
                this.props.fetchMovies(this.state.text);
            } else {
                this.props.clearMovies();
            }
        }, 300);
    }
    render() {
        return (
                <div className = {Classes.MoviesList}>
                    <div className = {Classes.loader}>
                    <Input label = {'Search'} onChange = {this.inputHandler}/>
                        {
                            this.props.load ?
                            <Loader/> : null
                        }
                    </div>
                    {
                        this.props.load? null:
                        this.props.movies.length>0 ?
                        <div className = 'container-fluid'>
                            <div className = 'row'>
                                {this.renderMovie()}
                            </div>
                        </div>: this.state.text ?
                        <h2>No results</h2> :
                        <h2>Type for search movies.</h2>
                    }
                </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        ...state.movies,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: (text) => dispatch(fetchMovies(text)),
        clearMovies: () => dispatch(clearMovies()),
        cancelLoading: () => dispatch()
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);