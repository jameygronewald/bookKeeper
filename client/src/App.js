import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { UserContext } from "./utils/UserContext";
import API from "../src/utils/API";
const { authConfig } = require("../src/utils/configHelper");

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
  });
  const [sessionToken, setSessionToken] = useState();

  const handleLogin = (user, token) => {
    localStorage.setItem("sessionToken", token);
    setSessionToken(token);
    setUserInfo({ ...user, isAuthenticated: true });
  };

  const retrieveUserInfo = config => {
    API.getUserLibrary(config)
      .then(response => {
        setUserInfo({ ...response.data.body, isAuthenticated: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
      setSessionToken(sessionToken);
      retrieveUserInfo(authConfig(sessionToken));
    }
  }, []);

  return (
    <>
      <div className="content">
        <Router>
          <UserContext.Provider
            value={{
              userInfo,
              setUserInfo,
              sessionToken,
              setSessionToken,
              handleLogin,
            }}
          >
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/search" componentName={Search} />
              <ProtectedRoute exact path="/saved" componentName={Saved} />
            </Switch>
          </UserContext.Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
