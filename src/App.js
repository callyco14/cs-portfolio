import React from "react";
import { Home } from "./Screens/Home";
import { Engineering } from "./Screens/Engineering";
import { DiydmKits } from "./Screens/DiydmKits";
import { FPCC } from "./Screens/FPCC";
import { HandyStand } from "./Screens/HandyStand";
import { Design } from "./Screens/Design";
import { Gallery } from "./Screens/Gallery";
import { Rendering } from "./Screens/Rendering";
import { AboutMe } from "./Screens/AboutMe";
import { Resume } from "./Screens/Resume"
import { Contact } from "./Screens/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engineering" element={<Engineering />} />
          <Route path="/diy-dm-kits" element={<DiydmKits />} />
          <Route path="/bird-friendly-picnic-structures" element={<FPCC />} />
          <Route path="handy-stand" element={<HandyStand />} />
        <Route path="/design" element={<Design />} />
        <Route path="/gallery" element={<Gallery />} />
          <Route path="/rendering" element={<Rendering />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
