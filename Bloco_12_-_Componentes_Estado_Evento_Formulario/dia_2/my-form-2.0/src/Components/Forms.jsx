import React from 'react';
import NameInput from './NameInput';
import Email from './Email';
import CPF from './CPF';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Tipo from './Tipo';

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
            gender: false
        }
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'radio' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <section>
                <form >
                    <fieldset>
                        <NameInput value={this.state.nome} handleChange={this.handleChange} />
                        <Email value={this.state.email} handleChange={this.handleChange} />
                        <CPF value={this.state.cpf} handleChange={this.handleChange} />
                        <Endereco value={this.state.endereco} handleChange={this.handleChange} />
                        <Cidade value={this.state.cidade} handleChange={this.handleChange} />
                        <Estado value={this.state.estado} handleChange={this.handleChange} />
                        <Tipo value={this.state.gender} handleChange={this.handleChange} />
                    </fieldset>
                    <button>Enviar</button>
                </form>
            </section>
        );
    }
}

export default Forms;