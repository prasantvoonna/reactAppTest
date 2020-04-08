import React from "react";
import {Link} from "react-router-dom";
import PatientStatics from "./patientStatics";

class PatientList extends React.Component{
    constructor(props) {
        super(props);
        let allPatientsList = JSON.parse(localStorage.getItem("patients"));
        let allActivePatientsList = allPatientsList.filter(item => item.reportStatus == "Positive" && item.archived ==false);
        this.state = {
            result: allPatientsList
        };
    }
    getTotalPatients(){
        let totalPatients = this.state.result.filter(item => !item.archived).length;
        return totalPatients;
    }
    getTotalActive(){
        let totalPositive = this.state.result.filter(item => item.reportStatus === "Positive" && !item.archived).length;
        return totalPositive;
    }
    getTotalRecovered(){
        return this.state.result.filter(item => item.reportStatus === "Recovered" && !item.archived).length;
    }
    deletePatient(patientId){
        const _patientData=  JSON.parse(localStorage.getItem("patients"));
        let reqObj = _patientData.findIndex((obj => obj.patientId == patientId));
        console.log("Before update: ", _patientData[reqObj]);
        _patientData[reqObj].archived = true;
        localStorage.setItem('patients', JSON.stringify(_patientData));
        this.setState({result: JSON.parse(localStorage.getItem("patients"))});
        this.getTotalActive();
    }
    render() {
        const {result} = this.state.result;
        return(
            <>
                <div className="row">
                    <div className="col-10">
                    <h2>Current Patient List</h2>
                    </div>
                    <div className="col-2">
                        <Link to={'/add-patient'} className="btn btn-primary" style={{float:"right"}}>Add Patient</Link>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Patient ID</th>
                                <th>Patient Name</th>
                                <th>Admission Date</th>
                                <th>Age</th>
                                <th>Status</th>
                                <th>Edit Patient</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.result.filter(item => !item.archived).map((item,index) => (
                            <tr className={item.archived? "hidden" : ""} key={item.patientId}>
                                <td>
                                    <span>{index+1}</span>
                                </td>
                                <td>
                                    <span>{item.patientId}</span>
                                </td>
                                <td>
                                    <span>{item.patientName}</span>
                                </td>
                                <td>
                                    <span>{item.admissionDate}</span>
                                </td>
                                <td>
                                    <span>{item.age}</span>
                                </td>
                                <td className={item.reportStatus === "Positive" ? "text-danger font-weight-bold" : item.reportStatus === "Recovered"? "text-success font-weight-bold" :"font-weight-bold"}>
                                    <span >{item.reportStatus}</span>
                                </td>
                                <td>
                                    <span><Link to={"/add-patient/"+item.patientId}  className="btn btn-warning" >Edit Patient</Link>{"  |  "}<button className="btn btn-danger" onClick={() => this.deletePatient(item.patientId)}>Delete Patient</button></span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <PatientStatics totalPatients={this.getTotalPatients()} _totalActivePatients={this.getTotalActive()} totalRecoveredPatients={this.getTotalRecovered()}></PatientStatics>
                </div>
            </>
        );
    }

}
export default PatientList;

