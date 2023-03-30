import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForms';
import { Component } from 'react';


class App extends Component {
  state = { 
    results: []
          }
  
  _handleResults = (results)=>{
    this.setState({results})

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
          : <p>con resultado</p>
        }

      </div>
    );
  
  }
}

export default App;
