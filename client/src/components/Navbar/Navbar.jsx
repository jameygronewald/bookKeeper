import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const Navbar = () => {
  const { setUserInfo, setSessionToken } = useContext(UserContext);

  const logoutUser = () => {
    localStorage.clear();
    setUserInfo({ isAuthenticated: false });
    setSessionToken("");
  };

  return (
    <div className="navRow">
      <h1>BookKeeper</h1>
      <Link className="navLink navLinkSearch" to={"/search"}>
        Search for Books
      </Link>
      <Link className="navLink navLinkSaved" to={"/saved"}>
        View Saved Books
      </Link>
      <Link onClick={logoutUser} className="navLink logout" to={"/home"}>
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
