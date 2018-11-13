import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <div>
//                 <MoviePoster posterUrl={this.props.poster}/>
//                 <h1> {this.props.title} is a movie</h1>
//             </div>            
//         )
//     }
// }

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return(
//             <img src={ this.props.posterUrl } />
//         )
//     }
// }

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;