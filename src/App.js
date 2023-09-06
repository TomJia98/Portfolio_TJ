import "./App.css";
import "./slideTransition.scss";
import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Projects from "./pages/projects";
import Main from "./pages/main";
import Links from "./components/links";

function App() {
  const location = useLocation();

  const getPathDepth = (location) => {
    return location.pathname.split("/").filter((n) => n !== "").length;
  };

  const currentDepth = getPathDepth(location);
  const prevDepthRef = useRef(currentDepth);

  useEffect(() => {
    prevDepthRef.current = currentDepth;
  }, [currentDepth]);

  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 800, exit: 400 };
  let direction; // = currentDepth - prevDepthRef.current >= 0 ? "left" : "right";
  if (location.pathname === "/projects") {
    direction = "right";
  } else {
    direction = "left";
  }
  return (
    <>
      <Links depth={currentDepth} />
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div className={`page ${direction}`}>
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route
                path="/projects"
                element={<Projects depth={currentDepth} />}
              />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
