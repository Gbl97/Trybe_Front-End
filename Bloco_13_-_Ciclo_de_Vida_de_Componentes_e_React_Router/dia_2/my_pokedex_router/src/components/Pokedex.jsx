import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import ButtonType from './ButtonType';
import ButtonAll from './ButtonAll';
import './pokedex.css';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            pokemons: false,
        }

        this.setIndex = this.setIndex.bind(this);
        this.setPokemons = this.setPokemons.bind(this);
        this.filterPokemons = this.filterPokemons.bind(this);
    }

    setIndex(value) {
        this.setState(() => ({
          position: value,
        }));
    }

    setPokemons(value) {
        this.setState(() => ({
          pokemons: value,
        }));
    }

    filterPokemons() {
        const { pokemons } = this.props;
        return pokemons
        .filter(({ type }) => type === this.state.pokemons || !this.state.pokemons);
    }



    render() {

        const values = {
            position: this.state.position,
            statePokemon: this.state.pokemons,
            setIndex: this.setIndex,
            setPokemons: this.setPokemons,
            pokemons: this.filterPokemons(),
        }
        const { pokemons } = this.props;
        // const filterTypes = [...this.props.pokemons].map(({ type}) => type);
        // const listTypes = filterTypes.filter((type, index, array) => array.indexOf(type) === index);
        const listTypes = [...new Set(pokemons.map(({ type}) => type))].sort();
        const btnsType = listTypes.map((types, index) => <ButtonType key={index} values={values} type={types} />);

        return (
            <main>
                <div className="pokedex">
                    <Pokemon pokemon={values.pokemons[values.position]} />
                    <div className="pokedex-buttons-panel">
                      <ButtonAll values={values} type={false} />
                      {btnsType}
                    </div>
                </div>
                <Button key='next' values={values}/>

            </main>
        );
    }
};

export default Pokedex;