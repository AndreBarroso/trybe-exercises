import pokemons from './componentes/data'
import Pokemon from './componentes/Pokemon'
import './App.css';

function App() {
  return (
   <div id = "pokedex"> {pokemons.map((element)=> <div><Pokemon especime = {element}/></div>)} </div>
  );
}

export default App;
