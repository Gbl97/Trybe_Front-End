import React from "react";
import './buttonType.css';

class ButtonType extends React.Component {
    typePokemon() {
        let {setPokemons, setIndex, position} = this.props.values;
        setIndex(position);
        setPokemons(this.props.type);
    }

    render() {
        return (<button onClick={this.typePokemon.bind(this)} className="buttonType-text filter-button">{this.props.type}</button>);
    }
}

export default ButtonType;