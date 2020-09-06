import React from 'react';
import { withRouter } from 'react-router-dom';

import './header.scss';

const Header = props => {
  return (
    <div className="header">
      <img
        src="i-tours-logo.png"
        alt="logo"
        className="logo"
        onClick={() => props.history.push('/')}
      />
      <div className="options">
        <div className="option">Sign In</div>
        <div className="option">About</div>
        <div className="option">User</div>
      </div>
    </div>
  );
};

export default withRouter(Header);
