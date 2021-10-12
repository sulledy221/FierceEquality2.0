import React from "react";
import "./all.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <BrowserRouter>
      <div className="link-div">
        <img src="/assets/FLAGS/progress.png" alt="" className="nav-img" />
        <li className="link">
          <Link className="link" to="/homepage">
            Fierce Equality
          </Link>
        </li>
        <li className="link">
          <Link className="link" to="/emergency">
            Emergency
          </Link>
        </li>
        <li className="link">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
      </div>
    </BrowserRouter>
  );
}
