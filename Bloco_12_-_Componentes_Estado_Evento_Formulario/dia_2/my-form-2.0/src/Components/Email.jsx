import React from 'react';

class Email extends React.Component {
    render() {
        const { value, handleChange } = this.props;


        return (
            <label htmlFor="Email">
                Email:
                <input id="Email" type="text" name="email" maxLength="50" required value={value} onChange={handleChange} />
            </label>
        );
    }
}

export default Email;