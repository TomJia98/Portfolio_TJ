import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ancestree from "../images/ancestree.png";
import junglr from "../images/junglr.png";
import tunesplice from "../images/TuneSplice.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => {
  const [activeProject, setActiveProject] = useState(0);

  const changeEvent = (arg) => {
    setActiveProject(arg);
  };
  const clickEvent = () => {
    console.log("thing clicked" + activeProject);
  };

  return (
    <Carousel autoPlay infiniteLoop width="70%" onChange={changeEvent}>
      <div>
        <img alt="legend1" src={ancestree} />
        <p className="legend" onClick={clickEvent}>
          Ancestree, The collaborativly expandable ancestory viewer
        </p>
      </div>
      <div>
        <img alt="legend2" src={junglr} />
        <p className="legend" onClick={clickEvent}>
          Junglr, The fun way to do social networking
        </p>
      </div>
      <div>
        <img alt="legend3" src={tunesplice} />
        <p className="legend" onClick={clickEvent}>
          tunesplice, A music guessing game that changes with the charts
        </p>
      </div>
    </Carousel>
  );
};
