import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForms';
import { Component } from 'react';
import { Movie } from './Components/Movie';


class App extends Component {
  state = { 
    results: []
          }
  
  _handleResults = (results)=>{
    this.setState({results})

  }
  _renderResulto(){
    const {results} = this.state

    return results.map(movie=>{
//      return <p key={movie.imdbID}>{movie.Title}</p>
        return (
          <Movie
            key={movie.imdbId}
            title ={movie.Title}
            poster={movie.Poster}
            year = {movie.Year}
          />
        )
    })

  }
          
  render(){
    return (
      <div className="App">
        <Title>buscador de peliculas</Title>
        <div className='SearchForm-wrapper'>
        <SearchForm  onResults={this._handleResults}/>
        </div>
        {
          this.state.results.length === 0 
          ? <p>sin resultado</p>
          : this._renderResulto()
        }

      </div>
    );
  
  }
}

export default App;
