import React from "react";
import './button.css';

class Button extends React.Component {
    nextPokemon(){
        let { pokemons, setIndex, position } = this.props.values;
        pokemons[position + 1] ? setIndex(position + 1) : setIndex(position = 0);
    }

    render() {
        return (<button onClick={this.nextPokemon.bind(this)} className="button-text pokedex-button">Próximo</button>);
    }
}

export default Button;