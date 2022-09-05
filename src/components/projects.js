import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ancestree from "../images/ancestree.png";
import junglr from "../images/junglr.png";
import tunesplice from "../images/TuneSplice.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";

export default () => {
  const [activeProject, setActiveProject] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

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
    console.log("thing clicked" + activeProject);
    setIsOpen(true);
  };

  return (
    <Carousel autoPlay infiniteLoop width="70%" onChange={changeEvent}>
      <div>
        <img alt="legend1" src={ancestree} />
        <p className="legend" onClick={clickEvent}>
          Ancestree, The collaborativly expandable ancestory viewer
        </p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
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
