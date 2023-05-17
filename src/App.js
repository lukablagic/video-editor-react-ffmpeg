import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoEditor from "./components/VideoEditor";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<VideoEditor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
