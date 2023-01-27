import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mode, setmode] = useState("light");
  const [btnText, setbtnText] = useState("Dark mode on");

  const toggelStyle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#282525";
      setbtnText("Light mode on");
    } else if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#F4F6F6";
      setbtnText("Dark mode on");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/adduser">
            Add user
          </Link>
          <div className="container ">
            <button
              onClick={toggelStyle}
              type="button"
              className="btn btn-info rounded-pill"
            >
              {btnText}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
