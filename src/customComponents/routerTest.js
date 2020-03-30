/*
import React, { Component } from "react";
import LifecycleTestWithDifferentStage from "./lifecycleTestWithDifferentStage.js";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
const Home = () => <React.Fragment><h2> Home </h2> <br/> <LifecycleTestWithDifferentStage/></React.Fragment>;
const NewsFeed = () => <h2> News Feed </h2>;
class RouterTest extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <nav>
                        <Link to={'/home'}> Home </Link><br />
                        <Link to={'/news'}> News feed </Link><br />
                        <Link to={'/contact'}> Contact </Link><br />
                    </nav>
                    <div>
                        <Route exact path="/" render={() => (<Redirect to="/home" />)} /> {/!*!//by default redirect to /home*!/}
                        <Route exact path="/home" component={Home}/>
                        <Route path="/news" component={NewsFeed}/>
                        <Route path="/contact" render={() => <h3>Contact Us</h3>}/>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}
export default RouterTest;
*/



import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import EditEmployee from './formErrorTest';
import Card from './nestedComponentWithPropsParent';
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/card" />)} />
                    <Route path="/card" component={Card} />
                    <Route path="/edit/:empId" component={EditEmployee} />
                </Switch>
            </div>
        );
    }
}
export default App;
 

