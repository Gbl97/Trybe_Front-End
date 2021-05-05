import React from 'react';

class Tipo extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        return (
            <div>
                <span>Tipo:</span>
                <input id="Casa" type="radio" name="gender" value={value} onChange={handleChange} />
                <label htmlFor="Casa">Casa</label>

                <input id="Apartamento" type="radio" name="gender" value={value} onChange={handleChange} />
                <label htmlFor="Apartamento">Apartamento</label>
            </div>
        );
    }
}

export default Tipo;