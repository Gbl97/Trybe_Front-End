import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserHeader from './UserHeader';
import '../Pages/User.css';

class User extends Component {
  render() {
    const { nameStore, emailStore, enderecoStore, } = this.props;
    const { history } = this.props;
    console.log('history', history);
    return (
      <>
        <UserHeader />
        <section id='section-container'>
          <p>Nome: {nameStore}</p>
          <p>Email: {emailStore}</p>
          <p>Endereco: {enderecoStore}</p>
          <button id='btn-voltar'>
            <Link to='/'>Voltar</Link>
          </button>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  nameStore: state.formulario.forms.name,
  emailStore: state.formulario.forms.email,
  enderecoStore: state.formulario.forms.endereco
});

export default connect(mapStateToProps)(User);

