import React, { useState, useEffect } from "react";
import { Link, Router, Switch, NavLink } from "react-router-dom";
import linkedIn from "../images/LI-In-Bug.png";
import github from "../images/GitHub-Mark-64px.png";
import resume from "../images/icons8-resume-100.png";
import arrow from "../images/arrow.png";

export default function Links(props) {
  const [currentPageProject, setcurrentPageProject] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname);
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
            <Link to="/Portfolio_TJ/" className="to-page">
              <h1 style={{ display: "inline-block" }}>To About Me</h1>
            </Link>
          </span>
        ) : (
          <span>
            <Link to="/projects" className="to-page">
              <h1 style={{ display: "inline-block" }}>To Projects</h1>
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
                style={{ marginLeft: 5 }}
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
                style={{ marginLeft: 10 }}
              />
            </a>
          </span>
          <span>
            <a
              href="https://drive.google.com/file/d/16zy-UBpvnpozgT4DqoV-RdLdgHDIx3Wq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={resume} className="link-photo" alt="resume" />
            </a>
          </span>
        </span>
        <hr id="header-hr" />
      </header>
    </>
  );
}
