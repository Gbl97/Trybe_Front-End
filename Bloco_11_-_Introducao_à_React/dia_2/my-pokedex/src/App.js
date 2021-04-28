import './App.css';
import pokemons from './Components/data';
import Pokedex from './Components/Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
