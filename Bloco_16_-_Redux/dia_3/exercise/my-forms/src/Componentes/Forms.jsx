import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendInput } from '../redux/action/index';
import { Link } from 'react-router-dom';
import Header from '../Componentes/Header';
import '../Componentes/Forms.css';

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
      <>
        <Header />
        <section>
          <br />
          <form id='form-container' onSubmit={this.handleSubmit}>
            <label id='input-name' htmlFor="Nome">
              Nome: <br />
              <input id="Nome" type="text" name="nome" maxLength="40" required onChange={this.handleChange} />
            </label>
            <br />
            <br />
            <label htmlFor="email" >
              Email: <br />
              <input id="email" type="text" name="email" maxLength="50" required onChange={this.handleChange} />
            </label>
            <br />
            <br />
            <label htmlFor="Endereco">
              Endereço: <br />
              <textarea id="Endereco" type="text" name="endereco" maxLength="100" required onChange={this.handleChange} />
            </label>
            <br />
            <br />
            <section id='section-container-buttons'>
              <input
                id='btn-enviar'
                type="submit"
                value="Enviar"
                onClick={() => inputDispatch(state)}
              />
              <button>
                <Link to={'/user'} > Meus dados </Link>
              </button>
            </section>
          </form>
          <br />
          {/* <button>
                  <Link  to={'/user'} > Meus dados </Link>
                </button> */}
        </section>
      </>
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