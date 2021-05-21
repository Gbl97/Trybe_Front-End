import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import pokemons from './components/data';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        {/* <Pokedex pokemons={pokemons} />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
