import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ancestree from "../images/ancestree.png";
import junglr from "../images/junglr.png";
import tunesplice from "../images/TuneSplice.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import "./main.css";
import Links from "../components/links.js";
export default function Projects(props) {
  const [activeProject, setActiveProject] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  function currentModal() {
    if (activeProject === 0) {
      return (
        <div>
          <button onClick={closeModal}>close</button>
          <p>data for ancestree</p>
        </div>
      );
    }
    if (activeProject === 1) {
      return (
        <div>
          <button onClick={closeModal}>close</button>
          <p>data for junglr</p>
        </div>
      );
    }
    if (activeProject === 2) {
      return (
        <div>
          <button onClick={closeModal}>close</button>
          <p>data for tunesplice</p>
        </div>
      );
    }
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const changeEvent = (arg) => {
    setActiveProject(arg);
  };
  const clickEvent = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="page-container page carousel-wrapper">
        <Carousel
          autoPlay
          infiniteLoop
          width="65%"
          onChange={changeEvent}
          id="projects"
        >
          <div>
            <a href="">
              <img alt="legend1" src={ancestree} />
            </a>
            <a
              className="legend"
              href="https://github.com/TomJia98/ancestree-heroku"
              target="_blank"
              rel="noreferrer"
            >
              Ancestree, The collaborativly expandable ancestory viewer
            </a>
          </div>
          <div>
            <a
              href="https://junglr-fbf3894b2abd.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="legend2" src={junglr} />
            </a>
            <a
              className="legend"
              href="https://github.com/TomJia98/Project-2"
              target="_blank"
              rel="noreferrer"
            >
              Junglr, The fun way to do social networking
            </a>
          </div>
          <div>
            <img alt="legend3" src={tunesplice} />
            <a
              className="legend"
              href="https://github.com/TomJia98/Project_Wunners"
              target="_blank"
              rel="noreferrer"
            >
              tunesplice, A music guessing game that changes with the charts
            </a>
          </div>
        </Carousel>
        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        > */}
        {/* this part loads when the project carousel has been clicked */}
        {/* {currentModal()} */}
        {/* </Modal> */}
      </div>
    </>
  );
}
