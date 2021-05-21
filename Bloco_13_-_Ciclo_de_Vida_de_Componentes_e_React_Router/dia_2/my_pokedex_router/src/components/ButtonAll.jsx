import React from "react";
import './buttonAll.css';
class ButtonAll extends React.Component {
  typeAll() {
      let {setPokemons, setIndex, position} = this.props.values;
      position = 0;
      setIndex(position);
      setPokemons(this.props.type);
    }    

    render() {
        return (<button onClick={this.typeAll.bind(this)} className="buttonAll-text filter-button">{'All'}</button>);
    }
}

export default ButtonAll;