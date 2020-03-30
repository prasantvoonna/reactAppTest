import React, { Component } from 'react';
class FormTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "Neudesic"
        };
       // this.getValue = this.getValue().bind(this);
    }
    getName = event => {
        this.setState({ txtUsername: event.target.value });
    };
    getValue = () => {
        console.log(this.state.txtUsername);
    }

    render() {
        return (
            <form>
                <input type="text" name="txtUsername" value={this.state.txtUsername}
                       onChange={this.getName}
                />
                <button onClick={this.getValue}>Check Company Value</button>
            </form>
        );
    }

}
export default FormTest;
