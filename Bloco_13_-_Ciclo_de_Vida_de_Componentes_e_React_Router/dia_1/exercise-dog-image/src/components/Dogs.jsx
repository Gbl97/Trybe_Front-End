import React, { Component } from 'react';

class Dogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogObj: '',
            name: '',
            array: []
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
        if (localStorage.namedDogURL) {
            const storage = JSON.parse(localStorage.namedDogURL)
            const lastDog = storage[storage.length - 1].message;
            this.setState({
                array: storage,
                dogObj: { message: lastDog }
            });
        } else {
            this.fetchDogs();
        }
     }



    renderImageElement = () => {
        return (
            <img src={ this.state.dogObj.message } alt={ this.state.dogObj.message } />
        );
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.dogObj.message.includes("terrier")) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.dogObj) {
            const racaDog = this.state.dogObj.message.split("/")[4];
            alert(racaDog);
        }
    }

    save() {
        const { dogObj: { message }, name, array } = this.state;

        const dogData = { message, name };
        const newArray = [...array, dogData];
        this.setState({ array: newArray });
        this.setState({ name: ""});
        localStorage.setItem("nameDogURL", JSON.stringify(newArray));
    }


    render() {
        if (this.state.dogObj === "") return "loading...";
        return (
            <div>
                <p>Dogs:</p>
                <button onClick={this.fetchDogs}>Novo dog!</button>
                <input 
                  type="text"
                  value={ this.state.name }
                  onChange={ e => this.setState({ name: e.target.value })}
                  placeholder="digite o nome do doguinho"
                />
                <button onClick={this.save}>Adicionar dog</button>
                <span>
                  { this.renderImageElement() }
                </span>
            </div>
        );
    }
}
 
export default Dogs;