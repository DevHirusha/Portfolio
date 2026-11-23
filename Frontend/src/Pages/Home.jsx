import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import assets from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const stack = [
    { Icon: FaReact, color: "#61DAFB", label: "React" },
    { Icon: SiPython, color: "#3178C6", label: "Python" },
    { Icon: FaNodeJs, color: "#68A063", label: "Node.js" },
    { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
    { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    { Icon: FaGitAlt, color: "#F05032", label: "Git" },
  ];
  const myImage = assets.logo;
  const navigate = useNavigate();
  return (
    // Main Background (Black Wallpaper with a subtle gradient)
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative">
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 mt-10 md:mt-20 relative z-10">
        {/* Left Content Area */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 text-blue-500 text-xl mb-4">
            <a
              href="https://www.linkedin.com/in/dev-alwis-7592a4429/"
              className="hover:text-orange-500 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/DevHirusha"
              className="hover:text-orange-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <FaInstagram />
            </a>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I'm a <span className="text-white">Developer</span>
            <span className="text-blue-500 animate-pulse">|</span>
          </h1>

          <div className="hero-desc max-w-lg mx-auto md:mx-0 flex flex-col gap-3 text-lg">
            {/* --- Tech stack badges row --- */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {stack.map(({ Icon, color, label }) => (
                <span
                  key={label}
                  className="tech-badge"
                  style={{ "--brand": color }}
                  title={label}
                >
                  <Icon />
                </span>
              ))}
            </div>

            {/* --- Text line with effects --- */}
            <p className="flex flex-wrap items-center justify-center md:justify-start gap-2 font-mono">
              <span className="divider">|</span>
              <span className="shimmer-text">Exploring New Technologies</span>
              <span className="divider">|</span>
              <span className="shimmer-text">
                <Typewriter
                  words={[
                    "Building Scalable Solutions",
                    "Full Stack Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
              <span className="cursor">_</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
            <button
              onClick={() => navigate("/projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              MY WORK
            </button>
            <a
              href="/Hirusha_Dilshan_Alwis_CV.pdf"
              download="Hirusha_Dilshan_Alwis_CV.pdf"
              className="inline-block bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all cursor-pointer"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image Area */}
        {/* Right Image Area (3D + Glitch Effect) */}
        <div className="hero-image-container">
          {/* 3D Tilt Container */}
          <div className="image-3d-container">
            {/* Glitch Wrapper*/}
            <div
              className="glitch-wrapper"
              style={{ "--img-url": `url(${myImage})` }}
            >
              <img src={myImage} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Grid Dots (Left side) */}
      <div className="absolute left-10 top-1/3 hidden lg:grid grid-cols-3 gap-4 opacity-30">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
        ))}
      </div>

      {/* Bottom Pagination */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 text-sm text-gray-400">
        <span className="cursor-pointer hover:text-blue-500">←</span>
        <span className="text-white font-bold">1</span>
        <span>/</span>
        <span>5</span>
        <span className="cursor-pointer hover:text-blue-500">→</span>
      </div>
    </div>
  );
};

export default Home;
