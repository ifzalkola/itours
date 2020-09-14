import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.scss';

import InputField from '../input-field/input-field';
import CustomButton from '../custom-button/custom-button';
import { signInStart } from '../../redux/user/user-actions';

const SignIn = ({ signInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = event => {
    event.preventDefault();

    signInStart(userCredentials);
    setUserCredentials({
      email: '',
      password: ''
    });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const { email, password } = userCredentials;
  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2>Have an account?</h2>
      <span className="form-heading">Sign In With Your Email and Password</span>
      <InputField
        name="email"
        required
        label="Email"
        placeholder="Enter your Email"
        value={email}
        type="email"
        onChange={handleChange}
      />
      <InputField
        name="password"
        required
        label="Password"
        placeholder="Enter your Password"
        value={password}
        type="password"
        onChange={handleChange}
      />
      <CustomButton type="submit">Sign In</CustomButton>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  signInStart: userCredentials => dispatch(signInStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignIn);
