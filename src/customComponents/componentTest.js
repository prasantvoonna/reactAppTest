import React, { Component } from "react";
class HelloCompTest extends React.Component {


    constructor() {
        super();
        this.name = "Jack";
    }
    //arrow functions should be used
    // code might behave unpredictably if arrow not used!!
    displayName = () => {
        return (
            <h1>Hello, {this.name}'s World</h1>
        );
    };

    render() {
        return ( // starting '(' is present
            <h1>Hello New Component {this.name}</h1>
        ); // ending ')' is also present
    }
}
class HelloCompTest1 extends React.Component {


    constructor() {
        super();
        this.name = "Jack";
    }
    //arrow functions should be used
    // code might behave unpredictably if arrow not used!!
    displayName = () => {
        return (
            <h1>Hello, {this.name}'s World1</h1>
        );
    };

    render() {
        return ( // starting '(' is present
            <h1>Hello New Component1 {this.name}</h1>
        ); // ending ')' is also present
    }
}

class Hello extends Component {
    movieName = 'Harry Potter'
    printMovie = () => {
        return (
            <h4> My favourite movie is:
                <span className="text-info">{ this.movieName }</span> </h4>
        );
    }
    render() {
        return (
            <div>
                { this.printMovie() }
            </div>
        );
    }
}


export default HelloCompTest1;
