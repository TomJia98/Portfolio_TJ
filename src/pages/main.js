import { Link, Router, Switch, NavLink } from "react-router-dom";
import Title from "react-titles/Title4";
import Header from "../components/header";
import me from "../images/drawin of tom.png";
// import Links from "../components/links";
import "./main.css";
export default function header() {
  return (
    <>
      {/* <Links /> */}
      <div className="page-container page">
        <div id="title">
          <Title
            id="title-component"
            size="400"
            text2="TOM JIA"
            text1="WEB DEVELOPER"
            open={true}
          />
          <div>
            <h2>ABOUT ME</h2>
            <p>about me text</p>
          </div>
        </div>
        <img src={me} alt="Tom Jia" id="me-photo" />
      </div>
    </>
  );
}
