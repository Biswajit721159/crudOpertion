import React, { useState } from "react";
import  {Link } from "react-router-dom";


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
      document.body.style.backgroundColor = "rgb(255,255,255)";
      setbtnText("Dark mode on");
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link class="nav-link" to="/TextChange_app">
                  TextChange_app
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="container ">
                <button
                  onClick={toggelStyle}
                  type="button"
                  className="btn btn-info"
                >
                  {btnText}
                </button>
             </div>
          </div>
          <Link className="btn btn-info mx-2" to="/AddUser">Adduser</Link>
        </div>
      </nav>
    </>
  );
}
