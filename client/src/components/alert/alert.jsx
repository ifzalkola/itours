import React from "react";

import "./alert.scss";

const Alert = (props) => {
  return (
    <div className={`alert ${props.success ? "success" : "error"}`}>
      {props.children}
    </div>
  );
};

export default Alert;
