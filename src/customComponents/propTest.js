import React, { Component } from 'react';
class propTest extends Component {
    constructor(props) {
        super(props);

    }
    increment(){
        if(this.props.numEX)
        this.props.numEx++;
    }
    render() {
        return (
            <h4 className="text-center">
                <span className="text-primary">{this.props.name}'s</span> favourite fruit is
                <span className="text-primary"> {this.props.fruit}</span></h4>
        );
    }
}
export default propTest;
