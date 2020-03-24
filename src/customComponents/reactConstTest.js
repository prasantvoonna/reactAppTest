import React, { Component } from 'react';
class reactConstTest extends Component {
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
    constructor() {
        super();
        //this.counter = 0; //added to state now!
        this.state = { // state should be assigned an Object Literal with relevant attributes
            counter: 0
        };
    }
    incrementCounter = () => {
        //this.state.counter += 1; // trying to increment(or mutate) the state! //not possible!
        this.setState({counter : this.state.counter + 1 }) //updating state using setState()
        this.setState({counter : this.state.counter + 5 }) //updating state using setState()
        this.setState({counter : this.state.counter + 3 }) //updating state using setState()
        this.setState({counter : this.state.counter + 4 }) //updating state using setState()// only last one will work


        console.log("Button Clicked," , this.state.counter+1, "times" );
    };
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}> Click </button>
                <p>{this.state.counter}</p>
            </div>
        );
    }


}
export default reactConstTest;
