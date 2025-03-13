import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./components/Sidenav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FooterComp from "./components/Footercomp";
import Comparison from "./components/Comparison";
import Timeline from "./components/Timeline";

//Colours: Classic F1 (Red, Black, and White)
// Primary: #FF1801 (Ferrari Red)
// Secondary: #0D0D0D (Black)
// Accent: #FFFFFF (White)
// Background: #1C1C1C (Dark Gray)
// Highlight: #FFC300 (Yellow – for key stats or warnings)

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#1c1c1c" }}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;
