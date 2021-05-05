import React from 'react';

class Descricao extends React.Component {
    render() {
        const { handleChange } = this.props;

        
        return (
            <label htmlFor="Descricao">
                Descrição do cargo:
                <textarea id="Descricao" type="text" name="descricao" maxLength="500" required onChange={handleChange} />
            </label>
        );
    }
}

export default Descricao;