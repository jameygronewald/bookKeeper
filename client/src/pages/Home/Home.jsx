import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/signup">
        <Button />
      </Link>
      <Link to="/login">
        <Button />
      </Link>
    </div>
  );
};

export default Home;
