import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mode, setmode] = useState("light");
  const [btnText, setbtnText] = useState("Dark mode on");

  const toggelStyle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#3D3D3B";
      setbtnText("Light mode on");
    } else if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "rgb(255,255,255)";
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
      </nav>
    </>
  );
}
