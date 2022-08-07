import About from "./component/About";
import Navbar from "./component/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductFrom } from "./component/ProductFroms";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container">
              <ProductFrom />
            </div>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
