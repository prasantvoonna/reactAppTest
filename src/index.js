import React from 'react';
import ReactDOM1 from 'react-dom';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//import HelloComp from './componentTest.js'
import HelloCompTest from "./customComponents/componentTest.js";
import ReactConstTest from "./customComponents/reactConstTest.js";
import EmployeeTest from "./customComponents/employeeTest.js";
import StateTest from "./customComponents/stateTest.js";
import PropTest from "./customComponents/propTest.js";
import LifecycleTest from "./customComponents/lifecycleTest.js";
import LifecycleTestWithDifferentStage from "./customComponents/lifecycleTestWithDifferentStage.js";
import NestedComponentWithPropsParent from "./customComponents/nestedComponentWithPropsParent.js";
import RouterTest from "./customComponents/routerTest.js";

import FormTest from "./customComponents/formTest.js";
import AxiosGet from "./customComponents/axiosGet.js";
import Header from "./customComponents/coronaTest/header";
import Card from "./customComponents/nestedComponentWithPropsParent";
import EditEmployee from "./customComponents/formErrorTest";
import CoronaPatientMain from "./customComponents/coronaTest/coronaPatientMain";

/*
import FormErrorTest from "./customComponents/formErrorTest.js";
*/

/*const hi = <h1>Hello World !!</h1>
ReactDOM1.render(hi, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function getSuccessMessage(){
    return (
        console.log("You have Registered successfully!")
    )
}
function display() {
    return (
        <div>
            <input type="button" value="Register" onClick={getSuccessMessage}/>
        </div>
    )
}
ReactDOM1.render( display(), document.getElementById('root1'));
const buttonEle = <button className="button1 button2" onClick= {display1} >Click Me</button>
function display1(){
    console.log("Button clicked");
}
ReactDOM1.render(buttonEle, document.getElementById('root2'));

function display2(){
    return(
        <div className="styling">
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Welcome to React App</span><br/>
            <button className="button1 button2">Demo button</button>
        </div>
    )
}
ReactDOM1.render( display2(), document.getElementById('root3'));

const buttonElement = <button className="btn btn-primary" onClick= {display3} >MyClick</button>
function display3(){
    console.log("Button clicked");
}
ReactDOM1.render(buttonElement , document.getElementById('root4'));

function display4(){
    return(
        <div className="text-center">
            <h3 className="text-danger">Welcome to React App</h3>
            <button className="btn btn-primary">Demo button</button>
        </div>
    )
}
ReactDOM1.render( display4(), document.getElementById('root5'));


ReactDOM1.render(<HelloCompTest />, document.getElementById('root6'));


ReactDOM1.render(<ReactConstTest></ReactConstTest>, document.getElementById('root7'));

ReactDOM1.render(<EmployeeTest></EmployeeTest>, document.getElementById('root8'));

ReactDOM1.render(<StateTest></StateTest>, document.getElementById('root9'));

ReactDOM1.render(<PropTest name="Prasant" fruit="Mango" numEx={1}  ></PropTest>, document.getElementById('root10'));

ReactDOM1.render(<LifecycleTest/>, document.getElementById('root11'));

ReactDOM1.render(<LifecycleTestWithDifferentStage/>, document.getElementById('root12'));
ReactDOM1.render(<NestedComponentWithPropsParent/>, document.getElementById('root13'));
ReactDOM1.render( <BrowserRouter>
    <RouterTest />
</BrowserRouter>, document.getElementById('root14'));
 ReactDOM1.render(<FormTest/>, document.getElementById('root15'));
// ReactDOM1.render(<FormErrorTest/>, document.getElementById('root16'));
ReactDOM1.render(<AxiosGet/>, document.getElementById('root17'));

ReactDOM1.render( <BrowserRouter>
    <RouterTest />
</BrowserRouter>, document.getElementById('root14'));*/

ReactDOM1.render(<CoronaPatientMain></CoronaPatientMain>,document.getElementById('root'));
