import React from 'react';

class NameInput extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        let error = undefined;
        if(value.length > 40) error = "Não pode passar de 40 caracteres!";
        return (
            <label htmlFor="Nome">
                Nome:
                <input id="Nome" type="text" name="nome" value={value} onChange={handleChange} />
                <span>{error ? error : ''}</span>
            </label>
        );
    }
}

export default NameInput;