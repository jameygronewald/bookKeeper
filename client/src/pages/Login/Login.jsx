import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = ({ handleSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setNewUser({ ...login, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(credentials);
    API.loginUser(credentials)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="email"
        name="email"
        onChangeFunction={handleChange}
      />
      <Input
        type="text"
        placeholder="password"
        name="password"
        onChangeFunction={handleChange}
      />
      <Button buttonText="Log In" />
    </form>
  );
};

export default Login;
