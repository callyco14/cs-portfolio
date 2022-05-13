import React from "react";
import { Home } from "./Screens/Home";
import { Engineering } from "./Screens/Engineering";
import { DiydmKits } from "./Screens/DiydmKits";
import { FPCC } from "./Screens/FPCC";
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
        <Route path="/engineering" element={<Engineering />} activeClassName="selected"/>
          <Route path="/diy-dm-kits" element={<DiydmKits />} />
          <Route path="/bird-friendly-picnic-structures" element={<FPCC />} />
        <Route path="/design" element={<Design />} activeClassName="selected"/>
        <Route path="/gallery" element={<Gallery />} activeClassName="selected"/>
          <Route path="/rendering" element={<Rendering />} />
        <Route path="/aboutme" element={<AboutMe />} activeClassName="selected"/>
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} activeClassName="selected"/>
      </Routes>
    </Router>
  );
}

export default App;
