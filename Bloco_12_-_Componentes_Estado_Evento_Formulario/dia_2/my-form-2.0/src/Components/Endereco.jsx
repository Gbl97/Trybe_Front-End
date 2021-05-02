import React from 'react';

class Endereco extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        return (
            <label htmlFor="Endereco">
                Endereço:
                <input id="Endereco" type="text" name="endereco" value={value} onChange={handleChange} />
            </label>
        );
    }
}

export default Endereco;