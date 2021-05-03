import React from 'react';
import NameInput from './NameInput';
import Email from './Email';
import CPF from './CPF';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Tipo from './Tipo';
import Curriculo from './Curriculo';
import Cargo from './Cargo';
import Descricao from './Descricao';

class Forms extends React.Component {
    constructor() {
        super();

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            gender: false,
            curriculo: '',
            cargo: '',
            descricao: '',
            submitted: false,
        }
    }

    validateEndereco = (endereco) => {
        const removeChar = /[^a-zA-Z0-9 ]/g; // Remove caracteres especias e permite espaço em branco

        // A função normalize permite substituir acentos por caracteres sem acentuação
        const string = endereco.normalize("NFD").replace(removeChar, '');

        return string;
    };

    handleChange = ({ target }) => {
        let { name } = target;
        let value = target.type === 'radio' ? target.checked : target.value;

        if (name === 'nome') value = value.toUpperCase();
        if (name === 'endereco') value = this.validateEndereco(value);

        this.updateState(name, value);
    }

    handleBlur = ({ target }) => {
        let { name, value } = target;

        // Regex (/^\d/): Verifica se a string começa com números
        // Match(): verifica se o valor especificado corresponde
        // a algum valores com os quais está sendo comparado

        if (name === 'cidade') value = value.match(/^\d/) ? '' : value;

        this.updateState(name, value);
    }

    updateState(name, value) {
        this.setState((state) => ({
            [name]: value,
        }))
    }


    handleSubmit(event) {
        alert(`Forms enviado`);
        event.preventDefault();
    }

    submitForm = () => { this.setState({ submitted: true })};

    render() {
        return (
            <section>
                <form onSubmit= {this.handleSubmit}>
                    <fieldset>
                        <legend>Dados pessoais:</legend>
                        <NameInput handleChange={this.handleChange}/>
                        <Email value={this.state.email} handleChange={this.handleChange} />
                        <CPF value={this.state.cpf} handleChange={this.handleChange} />
                        <Endereco  handleChange={this.handleChange} />
                        <Cidade handleChange={this.handleChange} handleBlur={this.handleBlur} />
                        <Estado value={this.state.estado} handleChange={this.handleChange} /> 
                        <Tipo value={this.state.gender} handleChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Dados profissionais:</legend>
                         <Curriculo handleChange={this.handleChange}/>
                         <Cargo handleChange={this.handleChange}/>
                         <Descricao handleChange={this.handleChange}/>
                    </fieldset>
                   <input type="submit" value="Enviar" onClick={ this.submitForm } />
                </form>
            </section>
        );
    }
}

export default Forms;