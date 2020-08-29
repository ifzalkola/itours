import React from "react";
import { useState } from "react";

import InputField from "../input-field/input-field";
import CustomButton from "../custom-button/custom-button";

import "./sign-up.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    fullName: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const { email, password, passwordConfirm, fullName } = userCredentials;
  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Do not have an account?</h2>
      <span className="form-heading">Sign Up with Email and Password</span>
      <InputField
        name="email"
        id="sign-up-email"
        required
        label="Email"
        placeholder="Enter your Email"
        value={email}
        type="email"
        onChange={handleChange}
      />
      <InputField
        name="fullName"
        required
        label="Full Name"
        placeholder="Enter your Full name"
        value={fullName}
        type="text"
        onChange={handleChange}
      />
      <InputField
        name="password"
        id="sign-up-password"
        required
        label="Password"
        placeholder="Enter your Password"
        value={password}
        type="password"
        onChange={handleChange}
      />
      <InputField
        name="passwordConfirm"
        required
        label="Confirm Password"
        placeholder="Confirm your Password"
        value={passwordConfirm}
        type="password"
        onChange={handleChange}
      />
      <CustomButton type="submit">Sign Up</CustomButton>
    </form>
  );
};
export default SignUp;
