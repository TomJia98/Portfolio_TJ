import { Link, Router, Switch, NavLink } from "react-router-dom";
import Title from "react-titles/Title4";
import Header from "../components/header";
import me from "../images/drawin-of-tom.png";
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
            {/* <h2>ABOUT ME</h2> */}
            <p
              style={{ color: "white", fontSize: 20, width: "50%", zIndex: -1 }}
            >
              Hello! I'm Tom Jia, a passionate full-stack web developer with 2
              years of experience.
              <br /> <br />
              My journey into the world of coding began after discovering
              YouTube creators like Michael Reeves, CodeBullet, and Fireship.
              Their content not only entertained me but also sparked my interest
              in web development. <br />
              <br /> I specialize in a range of technologies, from front-end
              frameworks like React and Bootstrap to back-end tools such as
              Express and MongoDB. I'm also experienced with various other
              technologies like C++ for Arduino, basic electronic engineering,
              Python, and data manipulation. <br />
              <br />A proud graduate of the UWA Fullstack Bootcamp, where I've
              had the privilege to give back by working as a Teacher's
              Assistant, keeping up to date on new technologies and helping
              others on their web development path.
            </p>
          </div>
        </div>
        <img src={me} alt="Tom Jia" id="me-photo" />
      </div>
    </>
  );
}
