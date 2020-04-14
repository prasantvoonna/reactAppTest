import React from "react";
import CustomInputs from "./common/customInputs";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
const _patientData=  JSON.parse(localStorage.getItem("patients"));
class NewPatientForm extends  React.Component {

    constructor(props) {
        super(props);
        this.patientExsits = this.props.match.params.patientID;
        if(this.patientExsits){
           this.patientDetails =  _patientData.filter(item => item.patientId == this.patientExsits)[0];
        }
        this.patientDetailsName = "";
        this.patientDetailsAdmissionDate = "";
        this.patientDetailsReportStatus = "";
        this.patientDetailsAge = "";
        if(this.patientDetails){
            this.patientDetailsName = this.patientDetails.patientName;
            this.patientDetailsAdmissionDate = this.patientDetails.admissionDate;
            this.patientDetailsReportStatus = this.patientDetails.reportStatus;
            this.patientDetailsAge = this.patientDetails.age;
        }
        this.state = {
            patientID : this.props.match.params.patientID || "",
            patientName: this.patientDetailsName,
            admissionDate:this.patientDetailsAdmissionDate,
            reportStatus: this.patientDetailsReportStatus,
            age: this.patientDetailsAge,
            archived : false,
            errors : {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formISValid = this.formISValid.bind(this);
        this.handleEditDetails = this.handleEditDetails.bind(this);
    }


    handleChange(event) {
        for (const _property in this.state) {

            if(_property === event.target.name){
                this.setState({[event.target.name] : event.target.value});
            }

        }
    }
   getPatientDetails(patientId){
        let currentPatient = _patientData.map(item => item.patientId == patientId);
        this.setState({patientId : currentPatient[0].patientId});
        this.setState({patientName : currentPatient[0].patientName});
        this.setState({admissionDate : currentPatient[0].admissionDate});
        this.setState({reportStatus : currentPatient[0].reportStatus});
        this.setState({age : currentPatient[0].age});

    }

    formISValid(){
        const _errors={};
        if(this.state.patientName === ""){
            _errors.patientName = "Patient Name is Required !";
        }
        if(this.state.admissionDate === ""){
            _errors.admissionDate = "Admission Date is Required !";
        }
        if(this.state.age === ""){
            _errors.age = "Patient age is Required !";
        }
        this.setState({errors : _errors});
        return Object.keys(_errors).length === 0;
    }
    generateID(value){
            var zeroes = new Array(6).join("0");
            return "COR-"+(zeroes + (value+1)).slice(-5)
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.formISValid()) {
            const patientData=  JSON.parse(localStorage.getItem("patients"));
            let admisonDate = new Date(this.state.admissionDate);
            patientData.push({
                "patientId": this.generateID(patientData.length),
                "patientName": this.state.patientName,
                "admissionDate": admisonDate.getDate("DD")+"/"+admisonDate.getMonth("MM") +"/"+admisonDate.getFullYear(),
                "reportStatus": this.state.reportStatus,
                "age": this.state.age,
                "archived" : false
            });
            localStorage.setItem('patients', JSON.stringify(patientData));
            this.props.history.push("/corona-management");
            toast.success("New Patient Added !")
        }else {
            toast.error("Mandatory Fields are missing !")
        }
    }
    handleEditDetails(event) {
        event.preventDefault();
        if (this.formISValid()) {
            const _patientData=  JSON.parse(localStorage.getItem("patients"));

            let reqObj = _patientData.findIndex((obj => obj.patientId == this.patientExsits));


            console.log("Before update: ", _patientData[reqObj])
            _patientData[reqObj].patientName = this.state.patientName;
            _patientData[reqObj].age = this.state.age;
            _patientData[reqObj].reportStatus = this.state.reportStatus;
            _patientData[reqObj].admissionDate = this.state.admissionDate;

            localStorage.setItem('patients', JSON.stringify(_patientData));
            this.props.history.push("/corona-management");
            toast.success("Patient Details Edited !")
        } else {
            toast.error("Mandatory Fields are missing !")

        }
    }
    render() {
        return (
            <>
            <form onSubmit={this.props.match.params.patientID ? this.handleEditDetails :this.handleSubmit}>
                <h3>Enter Patient Details</h3>
                <label>Patient ID : {this.props.match.params.patientID ? this.props.match.params.patientID : this.generateID(JSON.parse(localStorage.getItem("patients")).length)}</label>

                <CustomInputs type="text"
                              label="Patient Name"
                              name="patientName"
                              value={this.state.patientName}
                              onChange={this.handleChange}
                              error={this.state.errors.patientName}/>
                <CustomInputs type="date"
                              format='dd/mm/yyyy'
                              label="Admission Date"
                              name="admissionDate"
                              value={this.state.admissionDate}
                              onChange={this.handleChange}
                              error={this.state.errors.admissionDate}/>


                <CustomInputs type="text"
                              label="Patient Age"
                              name="age"
                              value={this.state.age}
                              onChange={this.handleChange}
                              error={this.state.errors.age}/>

                <div className="form-group" >
                    <label>
                        Patient Report Status :
                        <select className="form-control form-control-lg" name="reportStatus" defaultValue={{  value: "TestInProgress" }} value={this.state.reportStatus} onChange={this.handleChange}>
                            <option value="">--SELECT--</option>
                            <option value="TestInProgress">Test In Progress</option>
                            <option value="Positive">Positive</option>
                            <option value="Negative">Negative</option>
                            <option value="Recovered">Recovered</option>
                        </select>
                    </label>
                </div>

                {this.props.match.params.patientID ? <input type="submit" className="btn btn-primary" value="Save Edited Patient Details"/> :
                    <input type="submit" className="btn btn-primary" value="Add Patient"/>} {"  |  "}
                <Link to={"/corona-management"}  className="btn btn-secondary" >Go To Patient List Page</Link>

            </form>
            </>

        );
    }
}

export default NewPatientForm;
