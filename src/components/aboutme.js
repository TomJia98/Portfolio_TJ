import React, { useState } from "react";
import Typist from "react-text-typist";

export default function About() {
  return (
    <div id="about">
      <Typist
        sentences={["First Sentence", "Second Sentence", "Third Sentence"]}
        loop={true}
        typingSpeed={100}
      />
      <p>asdasdasd</p>
    </div>
  );
}
