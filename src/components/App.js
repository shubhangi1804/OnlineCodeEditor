import React from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import Webeditor from "./Webeditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/webeditor" element={<Webeditor />} />
          <Route exact path="/custom" element={<Dropdown />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
