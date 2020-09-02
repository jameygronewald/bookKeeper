import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navRow">
      <h1>BookKeeper</h1>
      <Link className="navLink navLinkSearch" to={"/search"}>
        Search for Books
      </Link>
      <Link className="navLink navLinkSaved" to={"/saved"}>
        View Saved Books
      </Link>
      <Link className="navLink logout" to={"/home"}>
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
