import React from "react";
import "./all.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Emergency">Emergency</Link>
      <Link to="/About">About</Link>
    </div>
  );
}
