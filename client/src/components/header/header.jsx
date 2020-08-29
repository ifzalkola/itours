import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src="i-tours-logo.png" alt="logo" className="logo" />
      <div className="options">
        <div className="option">Sign In</div>
        <div className="option">About</div>
        <div className="option">User</div>
      </div>
    </div>
  );
};

export default Header;
