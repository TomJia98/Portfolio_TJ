import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ancestree from "../images/ancestree.png";
import junglr from "../images/junglr.png";
import tunesplice from "../images/TuneSplice.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";

export default function Projects() {
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
    <span id="projects">
      <Carousel autoPlay infiniteLoop width="50%" onChange={changeEvent}>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* this part loads when the project carousel has been clicked */}
        {currentModal()}
      </Modal>
    </span>
  );
}
