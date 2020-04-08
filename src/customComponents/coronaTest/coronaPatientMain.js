import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./header";
import PatientList from "./patientList";
import PatientStatics from "./patientStatics";
import NewPatientForm from "./newPatientForm";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

class CoronaPatientMain extends React.Component{
    render() {
        return(
        <div className="container">
            <div className="row">
                 <Header></Header>
                <ToastContainer autoClose={6000}></ToastContainer>
            </div>

                 <BrowserRouter>
                    <Switch>
                        {/*<Route path="/" render={() => (<Redirect to="/corona-management" />)} />*/}
                        <Route path="/corona-management" component={PatientList} />
                        <Route path="/add-patient/:patientID" component={NewPatientForm} />
                        <Route path="/add-patient" component={NewPatientForm} />
                    </Switch>
                 </BrowserRouter>

        </div>
        );
    }
}
export default CoronaPatientMain;
