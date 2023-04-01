import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForms';
import { Component } from 'react';
//import { Movie } from './Components/Movie';
import { Movielist } from './Components/Movielist';


class App extends Component {
  state = { 
    results: [],
    usedSearch : false
          }
  
  _handleResults = (results)=>{
    this.setState({results,usedSearch:true})

  }
//   _renderResulto(){
//     const {results} = this.state

//     return results.map(movie=>{
// //      return <p key={movie.imdbID}>{movie.Title}</p>
//         return (
//           <Movie
//             key={movie.imdbId}
//             title ={movie.Title}
//             poster={movie.Poster}
//             year = {movie.Year}
//           />
//         )
//     })

//   }
  _renderResults(){
      return this.state.results.length === 0 
    ? <p>sorry! results not found</p>
    : <Movielist movies={this.state.results}/>

  }
          
  render(){
    return (
      <div className="App">
        <Title>buscador de peliculas</Title>
        <div className='SearchForm-wrapper'>
        <SearchForm  onResults={this._handleResults}/>
        </div>
        {
          this.state.usedSearch
          ? this._renderResults()
          : <small>use the form to search a movie</small>
        }


        {/* {
          this.state.results.length === 0 
          ? <p>sin resultado</p>
//          : this._renderResulto()
          : <Movielist movies={this.state.results}/>
        } */}

      </div>
    );
  
  }
}

export default App;
