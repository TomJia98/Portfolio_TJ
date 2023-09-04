import { Link, Router, Switch, NavLink } from "react-router-dom";
import Title from "react-titles/Title4";
// import {} from "react-router";
// import AboutMe from "./components/aboutme";
export default function header() {
  return (
    <header>
      <Title size="400" text2="TOM JIA" text1="WEB DEVELOPER" open={true} />
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact Me</a>
      {/* <AboutMe /> */}
    </header>
  );
}
