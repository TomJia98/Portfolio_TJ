import React from "react";
import { Carousel } from "react-responsive-carousel";
import acnestree from "../images/ancestree.png";
import junglr from "../images/junglr.png";
import tunesplice from "../images/TuneSplice.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel autoPlay infiniteLoop>
    <div>
      <img alt="legend1" src={acnestree} />
      <p className="legend">
        Ancestree, The collaborativly expandable ancestory viewer
      </p>
    </div>
    <div>
      <img alt="legend2" src={junglr} />
      <p className="legend">Junglr, The fun way to do social networking</p>
    </div>
    <div>
      <img alt="legend3" src={tunesplice} />
      <p className="legend">
        tunesplice, A music guessing game that changes with the charts
      </p>
    </div>
  </Carousel>
);
