import React from 'react';

class Cargo extends React.Component {
    render() {
        const { handleChange } = this.props;

        // onMouseEnter={() => {alert('Preencha com cuidado esta informação')}}
        return (
            <label htmlFor="Cargo">
                Cargo:
                <input id="Cargo" type="text" name="cargo" maxLength="40" required onChange={handleChange} />
            </label>
        );
    }
}

export default Cargo;