import React, { Component } from 'react';
class StateTest extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            message:""
        };
    }
    incrementCounter = () => {
        this.setState({counter:this.state.counter+1 , message:"Button clicked"+(this.state.counter+1)+"times"})
    };
    render() {
        return (
            <div>
                <button className="btn btn-primary btn-lg" onClick={this.incrementCounter}> Click </button>
                <p>{this.state.message} {this.state.counter} times</p>
            </div>
        );
    }
}
export default StateTest;
