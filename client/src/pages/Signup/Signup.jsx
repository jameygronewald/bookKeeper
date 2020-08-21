import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import API from "../../utils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const notifyInvalidPassword = () =>
    toast.error(
      "Password does not match confirmation. Please re-type your password and make sure the confirmation matches."
    );

  const handleChange = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSignup = event => {
    event.preventDefault();
    console.log(newUser);
    if (newUser.password !== newUser.passwordConfirm) {
      notifyInvalidPassword();
      return;
    }
    API.signUpUser(newUser)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
      <form onSubmit={handleSignup}>
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChangeFunction={handleChange}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChangeFunction={handleChange}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          onChangeFunction={handleChange}
        />
        <Input
          type="text"
          placeholder="Enter a password"
          name="password"
          onChangeFunction={handleChange}
        />
        <Input
          type="text"
          placeholder="Confirm your password"
          name="passwordConfirm"
          onChangeFunction={handleChange}
        />
        <Button buttonText="SIGN UP" />
      </form>
    </>
  );
};

export default Signup;
