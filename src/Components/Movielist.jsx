import { Component } from "react";
import PropTypes from 'prop-types'
import { Movie } from "./Movie";

export class Movielist extends Component{

    static propTypes = {
        movies : PropTypes.array
    }

    render(){

        const {movies} =  this.props

        return movies.map(movie=>{
            return (
                <Movie 
                    key={movie.imdbId}
                    title={movie.Title}
                    poster={movie.Poster}
                    year={movie.Year}
                />
            )
        })
        
    }
}