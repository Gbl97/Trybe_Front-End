import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        const { nameStore, emailStore, enderecoStore, } = this.props;
        return (
            <>
            <section>
                <ul>
                    <li>Nome: { nameStore } </li>
                    <li>Email: { emailStore } </li>
                    <li>Endereco: { enderecoStore } </li>
                </ul>
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

