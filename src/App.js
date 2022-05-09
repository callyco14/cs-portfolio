import React from "react";
import { Home } from "./Screens/Home";
import { Engineering } from "./Screens/Engineering";
import { DiydmKits } from "./Screens/DiydmKits";
import { Design } from "./Screens/Design";
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
          <Route path="/diydmkits" element={<DiydmKits />} />
        <Route path="/design" element={<Design />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
