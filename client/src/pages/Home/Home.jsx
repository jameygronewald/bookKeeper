import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <Link to="/signup">
        <Button className="signupButton" buttonText="SIGN UP" />
      </Link>
      <div className="loginPromptText">
        Already have an account? Log in below!
      </div>
      <Link to="/login">
        <Button className="loginButton" buttonText="LOG IN" />
      </Link>
      <h1>Welcome to BookKeeper</h1>
      <div className="homeText">
        With BookKeeper, search for books and save them to your library. Once in
        your library, you can rate/review books and post your reviews to the
        public review wall for any users to see!
      </div>
    </div>
  );
};

export default Home;
