import React from "react";

const CustomInput = ({ label = "", icon = null, ...rest }) => {
  return (
    <div className="custom-input-wrapper">
      <img src={icon} alt="" className="icon" />
      <div className="custom-input-inner">
        <label>{label}</label>
        <input {...rest} />
      </div>
    </div>
  );
};

export default CustomInput;
