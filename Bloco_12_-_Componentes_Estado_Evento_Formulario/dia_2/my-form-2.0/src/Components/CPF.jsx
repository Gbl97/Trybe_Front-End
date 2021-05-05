import React from 'react';

class CPF extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        return (
            <label htmlFor="CPF">
                CPF:
                <input id="CPF" type="text" name="cpf" maxLength="11" required value={value} onChange={handleChange} />
            </label>
        );
    }
}

export default CPF;