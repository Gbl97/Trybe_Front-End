import React from 'react';

class NameInput extends React.Component {
    render() {
        const { handleChange } = this.props;

        
        return (
            <label htmlFor="Nome">
                Nome:
                <input id="Nome" type="text" name="nome" maxLength="40" required onChange={handleChange} />
            </label>
        );
    }
}

export default NameInput;