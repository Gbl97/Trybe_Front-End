import React from 'react';

class Estado extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        return (
            <label htmlFor="Estados">
                Estado:
                <select name="estado" id="Estados" value={value} onChange={handleChange}>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                </select>
            </label>
        );
    }
}

export default Estado;