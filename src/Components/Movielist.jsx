import { Component } from "react";
import PropTypes from 'prop-types'
import { Movie } from "./Movie";

export class Movielist extends Component{

    static propTypes = {
        movies : PropTypes.array
    }

    render(){

        const {movies} =  this.props

        return (
            <div className="Movielist">
             {
                 movies.map(movie=>{
                 return (
                    <div key={movie.imdbId} className="Movielist-item">
                    <Movie 
                        
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year}
                    />                        
                    </div>
                )
            })

             }   
            </div>
        )        
    }
}