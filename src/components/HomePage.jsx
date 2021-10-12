import React from "react";
import "./all.css";

// import { useState } from "react";

export default function HomePage({ flagItems }) {
  // const [choice, setChoice] = useState("");
  return (
    <div>
      <img src="/assets/FLAGS/Asexual.jpeg" alt="" className="div-flag" />
      <img src="/assets/FLAGS/bisexual.jpeg" alt="" className="div-flag" />
      <img src="/assets/FLAGS/trans.jpeg" alt="" className="div-flag" />
      <img src="/assets/FLAGS/rainbow.jpeg" alt="" className="div-flag" />
    </div>
  );
}
