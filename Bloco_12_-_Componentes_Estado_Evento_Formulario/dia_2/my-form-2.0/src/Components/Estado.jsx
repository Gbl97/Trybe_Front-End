import React from 'react';
import states from './states';

class Estado extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        return (
            <label htmlFor="Estados">
                Estado:
                <select name="estado" id="Estados" required defaultValue="" value={value} onChange={handleChange}>
                    {states.map((state, index) => (<option key={ index }>{ state }</option>))}
                </select>
            </label>
        );
    }
}

export default Estado;