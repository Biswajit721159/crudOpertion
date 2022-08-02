
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Practics from "./component/Practics";
import Counter from "./component/Counter";
import React, { useState } from "react";
import Practics1 from "./component/Practics1";
import Contact from "./component/Contact";
import Run from "./component/Run";
import Home from "./component/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./component/Home";
import AddUser from "./component/AddUser";

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route path="/TextChange_app">
            <div className="container">
              <TextForm />
            </div>
          </Route>
          <Route path="/">
            <div className="container">
              <Home />
            </div>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
