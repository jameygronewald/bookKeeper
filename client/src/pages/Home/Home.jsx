import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/signup">
        <Button buttonText="SIGN UP" />
      </Link>
      <Link to="/login">
        <Button buttonText="LOG IN" />
      </Link>
    </div>
  );
};

export default Home;
