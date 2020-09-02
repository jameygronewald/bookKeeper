import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <Link to="/signup">
        <Button className="signupButton" buttonText="SIGN UP" />
      </Link>
      <Link to="/login">
        <Button className="loginButton" buttonText="LOG IN" />
      </Link>
    </div>
  );
};

export default Home;
