import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to={"/"}>
      <div>Go back to Homepage</div>
    </Link>
  );
};

export default BackButton;
