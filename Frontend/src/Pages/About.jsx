import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  Code,
  Smartphone,
  PenTool,
  Users,
} from "lucide-react";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCode,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Scroll reveal animation
  const reveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Card animation
  const cardReveal = {
    hidden: {
      opacity: 0,
      y: 60,
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

  return (
    <div>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative flex items-center justify-center py-10 px-4 md:px-8">
        {/* Background Subtle Glow Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar (Profile) */}
          <div className="bg-[#0a0a0a] rounded-3xl p-8 flex flex-col items-center w-full lg:w-[35%] shadow-xl">
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-blue-500">
              <img
                src="my.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-200 mb-1">
              Hirusha Dilshan Alwis
            </h1>

            <p className="text-gray-500 text-sm mb-6">FullStack Developer</p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              <a
                href="#"
                className="p-3 bg-gray-900 rounded-lg text-blue-600 hover:bg-gray-200 transition"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-gray-900 rounded-lg text-blue-700 hover:bg-gray-200 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-gray-900 rounded-lg text-blue-400 hover:bg-gray-200 transition"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-gray-900 rounded-lg text-blue-700 hover:bg-gray-200 transition"
              >
                <FaGithub size={20} />
              </a>
            </div>

            {/* Contact Info Card */}
            <div className="w-full bg-[#0a0a0a] rounded-2xl p-6 flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-orange-500">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium">Phone</p>

                  <p className="text-sm text-gray-300 font-semibold">
                    +70 650 8048
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-orange-500">
                  <Mail size={20} />
                </div>

                <div className="break-all">
                  <p className="text-xs text-gray-400 font-medium">Email</p>

                  <p className="text-sm text-gray-300 font-semibold">
                    hdrxdev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-orange-500">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium">Location</p>

                  <p className="text-sm text-gray-300 font-semibold">
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Skills & My Work Links */}
            <div className="flex flex-wrap items-center gap-6">
              {/* My Skills Link */}
              <a
                href="/Skill"
                className="group flex items-center gap-2 text-blue-400 font-semibold transition-all hover:text-blue-300"
              >
                <FaCode size={18} />
                <span>My Skills</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>

              {/* My Work Link */}
              <a
                href="/projects"
                className="group flex items-center gap-2 text-orange-400 font-semibold transition-all hover:text-orange-300"
              >
                <FaBriefcase size={18} />
                <span>My Work</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Content Area (About & What I do) */}
          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 w-full lg:w-[65%] shadow-xl text-gray-800">
            {/* About Me Section */}
            <motion.div
              className="mb-12"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.h2
                className="text-3xl font-black text-gray-200 mb-4 inline-block relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                ABOUT ME
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
              </motion.h2>

              <motion.p
                className="text-gray-400 leading-relaxed mt-6 text-sm md:text-base"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                Hello! I'm Hirusha Dilshan Alwis, a passionate IT undergraduate
                and aspiring Full Stack Developer with a strong interest in
                building modern, responsive, and user-friendly applications. I
                enjoy working with technologies such as React, Java, Spring
                Boot, Flutter, and MySQL to turn ideas into practical solutions.
                I'm continuously learning new technologies, improving my
                problem-solving skills, and exploring innovative ways to create
                meaningful digital experiences. My goal is to grow as a
                developer and contribute to impactful real-world projects.
              </motion.p>
            </motion.div>

            {/* What I do Section */}
            <div>
              <motion.h3
                className="text-2xl font-bold text-gray-200 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                What I do!
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {/* Card 1: Web Development */}
                <motion.div
                  variants={cardReveal}
                  className="border border-orange-200 p-6 rounded-2xl hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="text-orange-500" size={24} />

                    <h4 className="font-bold text-gray-300">Web Development</h4>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    I enjoy building modern and responsive web applications
                    using React for frontend development and Java with Spring
                    Boot for backend development. I also work with MySQL to
                    design and manage databases, focusing on creating secure,
                    scalable, and user-friendly applications.
                  </p>
                </motion.div>

                {/* Card 2: App Development */}
                <motion.div
                  variants={cardReveal}
                  className="border border-blue-200 p-6 rounded-2xl hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="text-blue-500" size={24} />

                    <h4 className="font-bold text-gray-300">App Development</h4>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    I enjoy developing mobile applications using Flutter and
                    Dart. I focus on creating responsive, user-friendly, and
                    efficient mobile experiences. I also enjoy integrating REST
                    APIs, implementing authentication features, and connecting
                    applications with backend services to build practical
                    real-world solutions.
                  </p>
                </motion.div>

                {/* Card 3: UI/UX Designing */}
                <motion.div
                  variants={cardReveal}
                  className="border border-green-200 p-6 rounded-2xl hover:border-green-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <PenTool className="text-green-500" size={24} />

                    <h4 className="font-bold text-gray-300">UI/UX Designing</h4>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    I enjoy designing clean, modern, and user-friendly
                    interfaces that provide a great user experience. I focus on
                    creating responsive layouts, maintaining consistent design
                    elements, and improving usability. My goal is to turn
                    creative ideas into attractive and intuitive digital
                    experiences.
                  </p>
                </motion.div>

                {/* Card 4: Mentorship */}
                <motion.div
                  variants={cardReveal}
                  className="border border-orange-200 p-6 rounded-2xl hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-orange-500" size={24} />

                    <h4 className="font-bold text-gray-300">Mentorship</h4>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    I believe in continuous learning, knowledge sharing, and
                    personal growth. I enjoy exploring new technologies,
                    learning from experienced developers, and collaborating with
                    others to solve problems. I am always eager to share what I
                    learn and grow together with the developer community.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            {/* Bottom Pagination */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-4 text-sm text-gray-400">
              <span className="cursor-pointer hover:text-blue-500">←</span>
              <span className="text-white font-bold">2</span>
              <span>/</span>
              <span>5</span>
              <span className="cursor-pointer hover:text-blue-500">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
