import React from "react";

import "./input-field.scss";

const InputField = ({ handleChange, id, label, name, ...otherProps }) => (
  <div className="field-container">
    <label className="label" htmlFor={id ? id : name}>
      {label}
    </label>
    <input
      className="input-field"
      onChange={handleChange}
      id={id ? id : name}
      name={name}
      {...otherProps}
    />
  </div>
);

export default InputField;
