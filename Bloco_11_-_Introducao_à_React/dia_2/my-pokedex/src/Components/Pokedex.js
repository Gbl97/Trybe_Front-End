import Pokemon from './Pokemon';


const Pokedex = (props) => {
    return (
        <div>
            {props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
}

export default Pokedex;