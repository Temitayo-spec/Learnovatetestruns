import React from "react";

import { Link } from "react-router-dom";

import img1 from "./images/logo.svg";

function open() {
  const nav_links = document.querySelector("nav.navbar ul");
    nav_links.style.display = "flex";
}

function close() {
  const nav_links = document.querySelector("nav.navbar ul");
    nav_links.style.display = "none"
}

function NavComp() {
  return (
    <div className="Nav-Comp">
      <header>
        {/* <!-- Logo --> */}
        <div className="logo">
          <a href="index.html">
            <img src={img1} alt="Learnovate Logo"></img>
          </a>
        </div>
        {/* <!-- Toggle icon --> */}
        <i
          className="material-icons nav-toggler"
          onClick={() => {
            open();
          }}
        >
          menu
        </i>
      </header>
      <ul className="nav-links">
        <i
          className="material-icons nav-close"
          onClick={() => {
            close();
          }}
        >
          clear
        </i>
        <li>
          <a href="login.html" className="signin">
            Sign in
          </a>
        </li>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Our offer</Link>
        </li>
        <li>
          <Link to="#">Message us</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavComp;
