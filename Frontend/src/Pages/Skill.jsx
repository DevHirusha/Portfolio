import React from "react";
import { motion } from "motion/react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaMicrosoft,
  FaCode,
  FaNodeJs,
  FaChartBar,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiDart,
  SiPostman,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

// Heading Animation
const headingVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Description Animation
const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Skills Container Animation
const skillsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Individual Skill Animation
const skillVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skill = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 md:p-12 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="flex flex-col justify-center gap-6 max-w-lg">
          {/* Heading */}
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#00e5ff] tracking-tight mb-2"
          >
            Skills & <span className="text-orange-400">Experience</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed font-mono"
          >
            <motion.p variants={descriptionVariants}>
              I am a passionate Full Stack Developer interested in building
              modern, responsive, and user-friendly web and mobile applications.
            </motion.p>

            <motion.p variants={descriptionVariants}>
              I have experience with frontend technologies such as HTML, CSS,
              JavaScript, React.js, Tailwind CSS, and Bootstrap, along with
              backend development using Java, Spring Boot, Node.js, and RESTful
              APIs.
            </motion.p>

            <motion.p variants={descriptionVariants}>
              I also work with MySQL and MongoDB for database management and
              have experience in mobile application development using Flutter
              and Dart.
            </motion.p>

            <motion.p variants={descriptionVariants}>
              I am familiar with development tools such as Git, GitHub, and
              Postman. Additionally, I am currently learning Python and
              exploring Power BI and Microsoft Office.
            </motion.p>

            <motion.p variants={descriptionVariants} className="pt-2">
              Visit my{" "}
              <a
                href="https://www.linkedin.com/in/dev-alwis-7592a4429/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e5ff] hover:underline hover:text-cyan-300 transition-colors"
              >
                LinkedIn
              </a>{" "}
              profile for more details or feel free to{" "}
              <a
                href="mailto:hdrxdev@gmail.com"
                className="text-[#00e5ff] hover:underline hover:text-cyan-300 transition-colors"
              >
                contact
              </a>{" "}
              me.
            </motion.p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: SKILLS CLOUD */}
        <div className="relative w-full min-h-[600px] lg:h-[600px] mt-6 lg:mt-0">
          {/* DESKTOP SKILLS */}
          <motion.div
            className="hidden lg:block w-full h-full relative"
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* React */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[5%] left-[25%] text-[#00e5ff] text-xl flex items-center gap-2 cursor-pointer"
            >
              <FaReact /> React.js
            </motion.div>

            {/* Java */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[12%] right-[8%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <FaCode /> Java
            </motion.div>

            {/* Spring Boot */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[20%] left-[5%] text-[#00e5ff] text-base flex items-center gap-2 cursor-pointer"
            >
              <SiSpringboot /> Spring Boot
            </motion.div>

            {/* Node.js */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[22%] right-[5%] text-[#00e5ff] text-base flex items-center gap-2 cursor-pointer"
            >
              <FaNodeJs /> Node.js
            </motion.div>

            {/* HTML5 */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[32%] left-[10%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <FaHtml5 /> HTML5
            </motion.div>

            {/* CSS3 */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[32%] right-[15%] text-[#00e5ff] text-3xl font-semibold flex items-center gap-2 cursor-pointer"
            >
              <FaCss3Alt /> CSS3
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[42%] left-[25%] text-[#00e5ff] text-xl flex items-center gap-2 cursor-pointer"
            >
              <SiTailwindcss /> Tailwind CSS
            </motion.div>

            {/* Bootstrap */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[45%] right-[5%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <SiBootstrap /> Bootstrap
            </motion.div>

            {/* JavaScript */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[52%] left-[5%] text-[#00e5ff] text-2xl font-medium flex items-center gap-2 cursor-pointer"
            >
              <FaJs /> JavaScript
            </motion.div>

            {/* MySQL */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[55%] right-[12%] text-[#00e5ff] text-base flex items-center gap-2 cursor-pointer"
            >
              <SiMysql /> MySQL
            </motion.div>

            {/* MongoDB */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[63%] left-[15%] text-[#00e5ff] text-base flex items-center gap-2 cursor-pointer"
            >
              <SiMongodb /> MongoDB
            </motion.div>

            {/* Git & GitHub */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[68%] right-[8%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <FaGitAlt /> Git & GitHub
            </motion.div>

            {/* Postman */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[75%] left-[40%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <SiPostman /> Postman
            </motion.div>

            {/* Flutter */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[82%] left-[5%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <SiFlutter /> Flutter
            </motion.div>

            {/* Dart */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[82%] right-[12%] text-[#00e5ff] text-lg flex items-center gap-2 cursor-pointer"
            >
              <SiDart /> Dart
            </motion.div>

            {/* Python */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[92%] left-[5%] text-[#00e5ff] text-base flex items-center gap-2 cursor-pointer"
            >
              <FaPython /> Python
              <span className="text-[10px] text-orange-400">(Learning)</span>
            </motion.div>

            {/* Microsoft Office */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[92%] right-[5%] text-[#00e5ff] text-sm flex items-center gap-2 cursor-pointer"
            >
              <FaMicrosoft /> Microsoft Office
            </motion.div>

            {/* Power BI */}
            <motion.div
              variants={skillVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="absolute top-[100%] left-[40%] text-[#00e5ff] text-base flex items-center gap-2 cursor-pointer"
            >
              <FaChartBar /> Power BI
            </motion.div>
          </motion.div>

          {/* MOBILE SKILLS */}
          <motion.div
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:hidden flex flex-wrap gap-4 items-center justify-center p-5 bg-[#111111] rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5"
          >
            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <FaReact /> React.js
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <FaCode /> Java
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <SiSpringboot /> Spring Boot
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <FaNodeJs /> Node.js
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <FaHtml5 /> HTML5
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <FaCss3Alt /> CSS3
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <SiTailwindcss /> Tailwind CSS
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <SiBootstrap /> Bootstrap
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <FaJs /> JavaScript
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <SiMysql /> MySQL
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <SiMongodb /> MongoDB
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <FaGitAlt /> Git & GitHub
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <SiPostman /> Postman
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <SiFlutter /> Flutter
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <SiDart /> Dart
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-lg text-[#00e5ff]"
            >
              <FaPython /> Python
              <span className="text-[10px] text-orange-400">(Learning)</span>
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <FaMicrosoft /> Microsoft Office
            </motion.span>

            <motion.span
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm text-[#00e5ff]"
            >
              <FaChartBar /> Power BI
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
