import { Link, Router, Switch, NavLink } from "react-router-dom";
import {} from "react-router";
// TODO:  get the header to work correctly with redirects to the needed areas
export default function header() {
  return (
    <header>
      <h1>Tom Jia</h1>
      {/* <Router>
        <NavLink>Home</NavLink>
        <NavLink>About Me</NavLink>
        <NavLink>Resume</NavLink>
        <NavLink>Contact Me</NavLink>
  </Router> */}
    </header>
  );
}
