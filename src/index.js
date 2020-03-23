import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const hi = <h1>Hello World !!</h1>
ReactDOM.render(hi, document.getElementById('root'));

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
ReactDOM.render( display(), document.getElementById('root1'));
const buttonEle = <button className="button1 button2" onClick= {display1} >Click Me</button>
function display1(){
    console.log("Button clicked");
}
ReactDOM.render(buttonEle, document.getElementById('root2'));

function display2(){
    return(
        <div className="styling">
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Welcome to React App</span><br/>
            <button className="button1 button2">Demo button</button>
        </div>
    )
}
ReactDOM.render( display2(), document.getElementById('root3'));

const buttonElement = <button className="btn btn-primary" onClick= {display3} >MyClick</button>
function display3(){
    console.log("Button clicked");
}
ReactDOM.render(buttonElement , document.getElementById('root4'));

function display4(){
    return(
        <div className="text-center">
            <h3 className="text-danger">Welcome to React App</h3>
            <button className="btn btn-primary">Demo button</button>
        </div>
    )
}
ReactDOM.render( display4(), document.getElementById('root5'));
