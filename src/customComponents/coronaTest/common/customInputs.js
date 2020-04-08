import React from "react";
import PropTypes from "prop-types";
function CustomInputs(props) {
    let warpClass = "form-group";
    if(props.error.length > 0){
        warpClass += "has-error";
    }
    return (
        <div className={warpClass}>
            <label >{props.label} :</label>
            <div className="field" >
                <input placeholder={props.placeholder} className="form-control form-control-lg" type={props.type} name={props.name} defaultValue={props.value} value={props.value} onChange={props.onChange} />
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );

}
CustomInputs.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired,
    error : PropTypes.string
};
CustomInputs.defaultProps ={
    error : ""
};
export default CustomInputs;
