import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, small, ...otherprops }) => (
  <button className={`custom-button ${small ? "small" : ""}`} {...otherprops}>
    {children}
  </button>
);

export default CustomButton;
