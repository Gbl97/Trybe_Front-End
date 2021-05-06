import React, { Component } from 'react';

class Dogs extends Component {
    constructor() {
        super();
        this.state = {
            dogObj: '',
        }

        this.fetchDogs = this.fetchDogs.bind(this);
    }

    //  fetchDogs() {
    //     this.setState(
    //         {loading: false},
    //         fetch("https://dog.ceo/api/breeds/image/random")
    //           .then(res => res.json())
    //           .then(result => this.setState({ dogObj: result })
    //     ));
    //  }

    fetchDogs() {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => res.json())
          .then(result => this.setState({ dogObj: result }))
    }

     componentDidMount() {
        this.fetchDogs();
     }



    renderImageElement = () => {
        return (
            <img src={ this.state.dogObj.message } alt="Random dog" />
        );
    }


    render() {
        if (this.state.dogObj === "") return "loading...";
        return (
            <div>
                <p>Dogs:</p>
                <button onClick={this.fetchDogs}>Novo dog!</button>
                <span>
                  { this.renderImageElement() }
                </span>
            </div>
        );
    }
}
 
export default Dogs;