import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';
import { signOutStart } from '../../redux/user/user-actions';

const Header = ({ history, user, signOut }) => {
  return (
    <div className="header">
      <img
        src="/i-tours-logo.png"
        alt="logo"
        className="logo"
        onClick={() => history.push('/')}
      />
      <div className="options">
        {user ? (
          <div
            className="option"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <div className="option" onClick={() => history.push('/signin')}>
            Sign In
          </div>
        )}
        <div className="option">About</div>
        <div className="option" onClick={() => history.push('/me')}>
          User
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser } }) => ({
  user: currentUser
});
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
