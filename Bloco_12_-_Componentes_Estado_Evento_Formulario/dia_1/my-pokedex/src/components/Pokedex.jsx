import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0
        }

        this.nextPokemon = this.nextPokemon.bind(this);
    }

    nextPokemon() {
      const { pokemon } = this.props;
      this.setState((previosState, _props) => {
          const { position } = previosState;
          const indexAtual = position === pokemon.length - 1 ? 0 : position + 1;
          return { ...previosState, position: indexAtual};
      });
    };

    render() {
        return (
            <main>
                <div className="pokedex">
                <Pokemon  pokemon={this.props.pokemon[this.state.position]} />
                </div>
                <button onClick={ this.nextPokemon }>Próximo Pokemon!</button>
                
            </main>
        );
    }
};

export default Pokedex;