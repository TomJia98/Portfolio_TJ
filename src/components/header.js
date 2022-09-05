import { Link, Router, Switch, NavLink } from "react-router-dom";
import {} from "react-router";
// TODO:  get the header to work correctly with redirects to the needed areas
export default function header() {
  return (
    <header>
      <h1>Tom Jia</h1>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact Me</a>
    </header>
  );
}
