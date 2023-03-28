import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForms';


function App() {
  return (
    <div className="App">
      <Title>buscador de peliculas</Title>
      <div className='SearchForm-wrapper'>
      <SearchForm/>
      </div>
    </div>
  );
}

export default App;
