import React from 'react';


var course = [  {name: "Angular", educator: "Rob"},
    {name: "ReactJS"},
    {name: undefined, educator: null}
];
class LifecycleTest extends React.Component {
    constructor() {
        super();
        this.state = { courseData: course };
    }
    render() {
        var users = this.state.courseData;
        return (
            <div>
                <h4>UI Courses list</h4>
                <div> {
                    users.map((userDetails)=> {
                        return (<div>
                            <b>Course:</b>{userDetails.name} <br/>
                            <b>Educator:</b>{userDetails.educator} <br/><br/>
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}
export default LifecycleTest;
