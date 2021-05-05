import React from 'react';

class Endereco extends React.Component {
    render() {
        const { handleChange } = this.props;

        // let error = undefined;
        // if(value.length > 200) error = "Não pode passar de 200 caracteres!";

        return (
            <label htmlFor="Endereco">
                Endereço:
            <input id="Endereco" type="text" name="endereco" maxLength="200" required onChange={handleChange} />
            </label>
        );
    }
}

export default Endereco;