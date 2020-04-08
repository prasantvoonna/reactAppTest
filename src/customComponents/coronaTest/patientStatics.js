import React from "react";

class PatientStatics extends React.Component{
    render() {
        return (
            <>
                <div className="col-4">
                    <h3>Total Patients : {this.props.totalPatients}</h3>
                </div>
                <div className="col-4">
                    <h3>Total Active : {this.props._totalActivePatients}</h3>
                </div>
                <div className="col-4">
                    <h3>Total Recovered : {this.props.totalRecoveredPatients}</h3>
                </div>
            </>
        );
    }
}

export default PatientStatics;
