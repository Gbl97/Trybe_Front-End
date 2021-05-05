import React from 'react';

class Cidade extends React.Component {
    render() {
        let {  handleChange, handleBlur } = this.props;

        // let error = undefined;
        // if(value.length >= 28) error = "Não pode passar de 40 caracteres!";

        // const vericaNumero = () => {
        //     const regex = /[0-9]/;
        //     regex.test(value);

        //     if(regex.test(value)) {
        //         value = '';
        //         return value;
        //     } else {
        //         return value;
        //     }
        // }

        return (
            <label htmlFor="Cidade">
                Cidade:
                <input id="Cidade" type="text" name="cidade" maxLength="28" onBlur={handleBlur} onChange={handleChange} />
            </label>
        );
    }
}

export default Cidade;