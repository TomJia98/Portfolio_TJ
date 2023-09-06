import React, { useState, useEffect } from "react";
import { Link, Router, Switch, NavLink } from "react-router-dom";
import linkedIn from "../images/LI-In-Bug.png";
import github from "../images/GitHub-Mark-64px.png";
import resume from "../images/icons8-resume-100.png";

export default function Links(props) {
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
      <header id="links">
        {currentPageProject ? (
          <span>
            <Link to="/" className="to-page">
              <h1 style={{ display: "inline-block" }}> 🢀 About Me</h1>
            </Link>
          </span>
        ) : (
          <span>
            <Link to="/projects" className="to-page">
              <h1 style={{ display: "inline-block" }}>Projects 🢂 </h1>
            </Link>
          </span>
        )}
        <span>
          <span>
            <a
              href="https://github.com/TomJia98"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                className="link-photo"
                alt="github"
                style={{ width: 60, height: 60, marginLeft: 5 }}
              />
            </a>
          </span>

          <span>
            <a
              href="https://www.linkedin.com/in/tom-jia-222b50226/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedIn}
                className="link-photo"
                alt="linkedIn"
                style={{ width: 60, height: 60, marginLeft: 10 }}
              />
            </a>
          </span>
          <span>
            <a
              href="https://docs.google.com/document/d/1nWVsyCN3FE8Fp6FzxnTcOuvC_ipXKmhX/edit?usp=sharing&ouid=110845975702977133833&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={resume}
                className="link-photo"
                alt="resume"
                style={{ width: 60, height: 60 }}
              />
            </a>
          </span>
        </span>
        <hr id="header-hr" />
      </header>
    </>
  );
}
