import React, { useState } from "react";
import { Link } from "react-router-dom";

//this needs to be the top header, changing its link based on what the current url is
export default function Header() {
  const currentPageLink = () => {
    if (window.location.pathname === "/projects") {
      return (
        <>
          <Link path="/"> About Me</Link> <p> Resume </p>
        </>
      );
    } else {
      return (
        <>
          <Link path="/projects"> Projects</Link> <p> Resume </p>
        </>
      );
    }
  };

  return (
    <>
      <header>{currentPageLink}</header>
    </>
  );
}
