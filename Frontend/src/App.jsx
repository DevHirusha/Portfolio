import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Education from "./Pages/Education";
import ContactUs from "./Pages/ContactUs";

import Project from "./Pages/Project";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
