import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./utils/UserContext";

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
  });
  const [sessionToken, setSessionToken] = useState();

  const handleLogin = (userData, token) => {
    localStorage.setItem("sessionToken", token);
    setSessionToken(token);
    setUserInfo({ ...userData, isAuthenticated: true });
  };

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
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </UserContext.Provider>
        </Router>
        <div className="push"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
