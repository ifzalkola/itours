import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { showAlert } from '../../redux/alert/alert-actions';
import store from '../../redux/store';

import './user-profile.scss';

const UserProfile = ({ cover, name }) => {
  const [passwords, setPasswords] = useState({
    passwordCurrent: '',
    passwordNew: '',
    passwordConfirm: ''
  });
  const [details, setDetails] = useState({
    fullName: '',
    coverPhoto: ''
  });
  const { passwordConfirm, passwordCurrent, passwordNew } = passwords;
  const { fullName, coverPhoto } = details;
  const handleDetailsChange = e => {
    const { value, name } = e.target;
    if (name === 'coverPhoto') {
      setDetails({ ...details, coverPhoto: e.target.files[0] });
      return;
    }
    setDetails({ ...details, [name]: value });
  };
  const handlePasswordsChange = e => {
    const { value, name } = e.target;
    setPasswords({
      ...passwords,
      [name]: value
    });
  };
  const handleDetailsSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('coverPhoto', coverPhoto);
      formData.append('fullName', fullName);
      console.log(formData.values());
      await Axios.patch('/api/users/', formData);
      store.dispatch(showAlert('User Details Updated Successfully', 'success'));
    } catch (err) {
      store.dispatch(showAlert(err.response.data.message, 'error'));
    }
  };
  const handlePasswordsSubmit = async e => {
    e.preventDefault();
    if (passwordNew !== passwordConfirm) {
      alert('Password doesnot match');
    }
    try {
      await Axios.patch('/api/users/update-password', {
        password: passwordNew,
        passwordConfirm,
        currentPassword: passwordCurrent
      });
      store.dispatch(showAlert('Password Updated Successfully', 'success'));
      setPasswords({
        passwordCurrent: '',
        passwordNew: '',
        passwordConfirm: ''
      });
    } catch (err) {
      store.dispatch(showAlert(err.response.data.message, 'error'));
    }
  };
  return (
    <div className="user-profile">
      <img className="cover" src={`/images/users/${cover}`} alt={name} />
      <div className="form-wrapper">
        <form
          className="details-form"
          onSubmit={handleDetailsSubmit}
          encType="multipart/form-data"
        >
          <label className="cover-image">
            Select Cover Image:
            <input
              type="file"
              name="coverPhoto"
              accept="image/*"
              onChange={handleDetailsChange}
            />
          </label>
          <label>
            Update your Name
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleDetailsChange}
            />
          </label>
          <input type="submit" value="Update Details" />
        </form>
        <form className="password-form" onSubmit={handlePasswordsSubmit}>
          <label>
            Current Password:
            <input
              type="password"
              name="passwordCurrent"
              value={passwordCurrent}
              required
              minLength={8}
              onChange={handlePasswordsChange}
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              name="passwordNew"
              value={passwordNew}
              required
              onChange={handlePasswordsChange}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              required
              onChange={handlePasswordsChange}
            />
          </label>
          <input type="submit" value="Update Password" />
        </form>
      </div>
    </div>
  );
};
export default UserProfile;
