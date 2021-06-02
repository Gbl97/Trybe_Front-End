import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendInput } from './redux/action/index';
import User from './User';

class Forms extends Component {
    constructor() {
        super();

        this.state = {
            nome: '',
            email: '',
            endereco: '',
        }
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        alert('Forms enviado!');
        event.preventDefault();
    }

    // resetCampus = () => {
    //     this.setState({
    //         nome: '',
    //         email: '',
    //         endereco: '',
    //     });
    // }
    
    render() {
        const { inputDispatch } = this.props;
        const { state } = this;
        
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Nome">
                        Nome:
                        <input id="Nome" type="text" name="nome" maxLength="40" required onChange={ this.handleChange }/>
                    </label>

                    <label htmlFor= "email" >
                        email:
                        <input id="email" type="text" name="email" maxLength="50" required onChange={ this.handleChange }/>
                    </label>

                    <label htmlFor="Endereco">
                        Endereço:
                        <textarea id="Endereco" type="text" name="endereco" maxLength="100" required onChange={ this.handleChange } />
                    </label>

                    <input 
                      type="submit" 
                      value="Enviar" 
                      onClick={ () => inputDispatch(state) } 
                    />
                </form>
                <User />
            </section>
        );
    }
}

// const mapStateToProps = (state) => ({
//     nameStore: state.name,
//     emailStore: state.email,
//     enderecoStore: state.endereco
// });

const mapDispatchToProps = (dispatch) => ({
    inputDispatch: (state) => dispatch(sendInput(state)),
});
 
export default connect(null, mapDispatchToProps)(Forms);