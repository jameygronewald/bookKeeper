import React, { useState, useContext } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useContext(UserContext);

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.loginUser(credentials)
      .then(response => {
        const { userObject, auth } = response.data.body;
        handleLogin(userObject, auth.sessionToken);
        history.push('/search')
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        onChangeFunction={handleChange}
      />
      <Input
        type="text"
        placeholder="Password"
        name="password"
        onChangeFunction={handleChange}
      />
      <Button buttonText="LOG IN" />
    </form>
  );
};

export default Login;
