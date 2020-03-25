import React from "react"
class nestedComponentWithProps extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonClicked: false
        }
    }
    render() {
        var note = null;
        var achievements=null;
        if (this.props.emp.age < 25) {
            note = <span className="text-info"> - Fresher</span>
        }
        if(this.state.buttonClicked){
            achievements=this.props.emp.achievements;
        }

        return (
            <div className="card" style={{ "width": 200 }}>
                <img className="card-img-top" src={this.props.emp.image} height="200" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.emp.empName}</h5>
                    <p className="card-text">
                        <span>Id: {this.props.emp.empId}</span><br />
                        <span>Age: {this.props.emp.age}</span> {note}<br />
                        <span>Salary: {this.props.emp.salary}</span><br />
                    </p>
                    <p><i>{achievements}</i></p>
                    <button type="button" className="btn btn-primary">Edit</button> <button className="btn btn-success" onClick={() => {
                    this.setState({ buttonClicked: true });
                }}>View</button>
                </div>
            </div>
        )
    }
}
export default nestedComponentWithProps;
