import React from 'react';
import UserProfile from '../../components/user-profile/user-profile';

import './account.scss';

const AccountPage = ({ currentUser }) => {
  return (
    <div className="account-page">
      <div className="user-navigation">
        <div>My Account</div>
        <div>My Bookings</div>
      </div>
      <div className="tab">
        <UserProfile cover={currentUser.photo} name={currentUser.fullName} />
      </div>
    </div>
  );
};

export default AccountPage;
