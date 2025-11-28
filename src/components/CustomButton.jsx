import React from 'react';
import '../css/CustomButton.css';
function CustomButton(props) {
    return (
        <div className="yarrak">

        <button className="btn customButton py-1"><span className="customButtonText fw-bold"> {props.text} </span></button>
        </div>
        
    );
}   
export default CustomButton;