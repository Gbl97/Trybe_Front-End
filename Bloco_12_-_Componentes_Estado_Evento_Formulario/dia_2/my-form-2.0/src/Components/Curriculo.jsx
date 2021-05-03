import React from 'react';

class Curriculo extends React.Component {
    render() {
        const { handleChange } = this.props;

        
        return (
            <label htmlFor="Curriculo">
                Resumo do currículo:
                <textarea id="Curriculo" type="text" name="curriculo" maxLength="1000" required onChange={handleChange} />
            </label>
        );
    }
}

export default Curriculo;