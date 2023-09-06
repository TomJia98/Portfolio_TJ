import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "./links";

//this needs to be the top header, changing its link based on what the current url is
export default function Header(props) {
  const [currentPageProject, setcurrentPageProject] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/projects") {
      setcurrentPageProject(true);
    } else {
      setcurrentPageProject(false);
    }
  }, [props.depth]);
  return (
    <>
      <header>
        {currentPageProject ? (
          <span>
            <Link to="/">
              <h1 style={{ display: "inline-block" }}> 🢀 About Me</h1>
            </Link>
            <Links />
          </span>
        ) : (
          <span>
            <Link to="/projects">
              <h1 style={{ display: "inline-block" }}>Projects 🢂 </h1>
            </Link>
            <Links />
          </span>
        )}
      </header>
    </>
  );
}
