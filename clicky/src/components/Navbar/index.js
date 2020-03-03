import React from "react";

import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div>
            <ul className = "navbar-nav">
                <li className = "navbar-nav">
                    <a className = "navbar-brand" href="/">Clicky Game</a>
                </li>
                {/* <li className = "navbar-nav">
                    {message}
                </li>
                <li className = "navbar-nav">
                    SCORE: {score} | TOP SCORE: {topScore}
                </li> */}
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;