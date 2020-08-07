import React from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import Saved from './pages/Saved/Saved';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
