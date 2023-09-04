import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
// import Carousel from "./pages/projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from "./pages/projects";
import Main from "./pages/main";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
