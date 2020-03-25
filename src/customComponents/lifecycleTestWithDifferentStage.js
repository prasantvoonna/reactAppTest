import React, { Component } from "react";
import ReactDOM from 'react-dom';


var course = [  {id: 1, name: "Angular", educator: "Rob"},
    {id: 2, name: "ReactJS", educator: "John"},
    {id: 3, name: "Ajax", educator: "Mack"}
];
class lifecycleTestWithDifferentStage extends React.Component {
    constructor() {
        super();
        this.state = { courseData: course, selected: false ,testCounter:0 };
        console.log("Initialization Phase: 'constructor()' executed");

    }
    componentWillMount = () => {
        console.log("Mounting Phase: 'componentWillMount()' executed");
    }

    render = () => {
        var users = this.state.courseData;
        console.log("Mounting Phase: 'render()' executed");
        return (
            <div>
                <h4>UI Courses list</h4>
                <div> {
                    users.map((userDetails)=> {
                        return (<div key={userDetails.id}>
                            <b>Course: </b>{userDetails.name} <br/>
                            <b>Educator: </b>{userDetails.educator} <br/>
                            <b>Counter: </b>{this.state.testCounter} <br/>
                            <button onClick={this.clickHandler}>Details</button><br/><br/>
                        </div>);
                    })}
                </div>
                <button onClick={this.exitComponent}>Exit</button>
            </div>
        );
    }
    componentDidMount = () => {
        console.log("Mounting Phase: 'componentDidMount()' executed");
    }
    clickHandler = () => {
        console.log("Details button is clicked, state will change...");
        this.setState({ selected: true, testCounter:this.state.testCounter+1 });
    }
    exitComponent = () => {
        console.log("Exit button is clicked, component will be destroyed");
        ReactDOM.unmountComponentAtNode(document.getElementById('root12'));
    }
    componentWillUnmount = () => {
        console.log("Un-Mounting Phase: 'componentWillUnmount()' executed");
    }
}
export default lifecycleTestWithDifferentStage;
