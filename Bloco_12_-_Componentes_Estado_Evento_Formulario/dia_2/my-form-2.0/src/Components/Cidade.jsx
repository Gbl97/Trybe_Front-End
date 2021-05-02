import React from 'react';

class Cidade extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        return (
            <label htmlFor="Cidade">
                Cidade:
                <input id="Cidade" type="text" name="cidade" value={value} onChange={handleChange} />
            </label>
        );
    }
}

export default Cidade;