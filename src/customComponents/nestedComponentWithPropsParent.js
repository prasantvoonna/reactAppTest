import React, { Component } from 'react';
import NestedComponentWithProps from "./nestedComponentWithProps.js";
class nestedComponentWithPropsParent extends Component {
    constructor() {
        super();
        const emp1 = {
            "empId": 100,
            "empName": "Prasant",
            "age": 30,
            "salary": 50000,
            "image": "emp1.png",
            "achievements": "Has worked on cutting edge technologies"
        }
        const emp2 = {
            "empId": 101,
            "empName": "Praveen",
            "age": 24,
            "salary": 40000,
            "image": "emp2.png",
            "achievements": "No major achievements so far"
        }
        this.empArr = [emp1, emp2]
    }
    render() {
        return (
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                {this.empArr.map(emp => <NestedComponentWithProps key={emp.empId} emp={emp}/>)}
            </div>
        );
    }
}
export default nestedComponentWithPropsParent;
