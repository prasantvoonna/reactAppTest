import React, { Component } from "react";
import axios from "axios";
class AppComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        };
        this.fetchEmployees = this.fetchEmployees.bind(this);
    }
    componentDidMount() {
        this.fetchEmployees();
    }
    fetchEmployees() {
        axios
            .get("./sampleData.json")
            .then(response => {
                this.setState({
                    result: response.data,
                    error: ""
                });
            });
    }
    render() {
        const { result } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <h3>Employee Data:</h3>
                        <br />
                        {result ? <Table list={result} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
const Table = ({ list }) => (
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Employee Achievement</th>
            <th>Employee Salary</th>
        </tr>
        </thead>
        <tbody>
        {list.map(item => (
            <tr key={item.empId}>
                <td>
                    <span>{item.empId}</span>
                </td>
                <td>
                    <span>{item.empName}</span>
                </td>
                <td>
                    <span>{item.age}</span>
                </td>
                <td>
                    <span>{item.achievements}</span>
                </td>
                <td>
                    <span>{item.salary}</span>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
);
export default AppComp;
