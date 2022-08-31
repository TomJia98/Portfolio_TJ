import React from "react";
import { Carousel } from "react-responsive-carousel";
import acnestree from "../images/ancestree.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="legend1" src={acnestree} />
      <p className="legend">legend 1</p>
    </div>
    <div>
      <img alt="legend2" src={acnestree} />
      <p className="legend">legend 2</p>
    </div>
  </Carousel>
);
