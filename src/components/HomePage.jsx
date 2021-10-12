import React from "react";
import "./all.css";

// import { useState } from "react";

export default function HomePage({ flagItems }) {
  // const [choice, setChoice] = useState("");
  return (
    <div>
      <li className="list-flag">
        <img
          src="/assets/FLAGS/Asexual.jpeg"
          alt="Asexual Pride Flag"
          className="img-flag"
        />
      </li>
      <li className="list-flag">
        <img
          src="/assets/FLAGS/bisexual.jpeg"
          alt="Bisexual Pride Flag"
          className="img-flag"
        />
      </li>
      <li className="list-flag">
        <img
          src="/assets/FLAGS/trans.jpeg"
          alt="Transgender Pride Flag"
          className="img-flag"
        />
      </li>
      <li className="list-flag">
        <img
          src="/assets/FLAGS/rainbow.jpeg"
          alt="Gay Pride Flag"
          className="img-flag"
        />
      </li>
    </div>
  );
}
