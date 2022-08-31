import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import { render } from "react-dom";
import Carousel from "./components/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
