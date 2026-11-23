import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaLayerGroup,
  FaEye,
  FaArrowRight,
  FaCalendarAlt,
  FaLaptopCode,
  FaReact,
  FaJava,
  FaDatabase,
  FaMobileAlt,
  FaCss3Alt,
  FaJs,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import assets from "../assets/assets.js";

// Project data
const projects = [
  {
    id: 1,
    title: "PocketCrew",
    subtitle: "Daily Expenses Tracker",
    category: "Mobile Application Development",
    image: assets.pocketcrew,
    description:
      "A daily expenses tracking application designed to help users manage their finances, track spending, and organize personal and shared budgets.",
    contribution:
      "Worked on mobile application development, including splash screen, onboarding screens, user management, and expense management interfaces.",
    year: "2026",
    github: "https://github.com/DevHirusha/Daily-Expenses-Tracker",
    technologies: [
      { name: "Flutter", icon: FaMobileAlt },
      { name: "Dart", icon: FaCode },
      { name: "Spring Boot", icon: FaJava },
      { name: "MySQL", icon: FaDatabase },
      { name: "React", icon: FaReact },
    ],
    features: [
      "User registration and login",
      "JWT authentication",
      "Google OAuth 2.0",
      "Email verification and password reset",
      "Daily expense management",
      "Quick expense entry",
      "Personal budgets and savings goals",
      "Shared budgets and groups",
      "Admin management panel",
    ],
  },
  {
    id: 2,
    title: "HiruEats",
    subtitle: "Online Food Delivery System",
    category: "Full Stack Development",
    image: assets.hirueats,
    description:
      "An online food delivery platform designed to provide users with a convenient way to explore food items and manage their food orders.",
    contribution:
      "Worked on frontend development and backend modules using React, Spring Boot, and MySQL.",
    year: "2026",
    github:
      "https://github.com/HirushaDev/HiruEats-Online-Food-Delivery-System",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "Spring Boot", icon: FaJava },
      { name: "MySQL", icon: FaDatabase },
      { name: "Tailwind CSS", icon: FaCss3Alt },
    ],
    features: [
      "Responsive user interface",
      "Food exploration",
      "Shopping cart management",
      "Order management",
      "Contact functionality",
      "Customer feedback",
      "REST API integration",
    ],
  },
];

// Project Card
const ProjectCard = ({ project, index, onView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10  transition-all duration-500 hover:border-orange-500/60 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)]">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden bg-[#1a1a1a]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <FaLaptopCode className="text-6xl text-orange-500" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-orange-500/30 bg-black/70 px-4 py-1 text-xs font-semibold text-orange-400 backdrop-blur-md">
            {project.category}
          </span>

          <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
            {project.year}
          </span>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-orange-400">
            {project.title}
          </h3>

          <p className="mb-4 text-sm text-blue-400">{project.subtitle}</p>

          <p className="mb-6 line-clamp-3 text-sm leading-7 text-gray-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => {
              const Icon = tech.icon;

              return (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-all hover:border-orange-500/50 hover:text-orange-400"
                >
                  <Icon className="text-blue-400" />
                  {tech.name}
                </span>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between border-t border-white/10 pt-5">
            <button
              onClick={() => onView(project)}
              className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-orange-400 transition-all hover:gap-3 hover:text-orange-300"
            >
              <FaEye />
              View Details
              <FaArrowRight />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="rounded-full border border-white/10 p-3 text-xl text-gray-300 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Details Modal
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="project-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative my-8 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111111] shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-3 text-white transition-all hover:bg-orange-500"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[#1a1a1a]">
                <FaLaptopCode className="text-7xl text-orange-500" />
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            {/* Title */}
            <div className="mb-6">
              <span className="mb-3 inline-block rounded-full bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-400">
                {project.category}
              </span>

              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {project.title}
              </h2>

              <p className="mt-2 text-blue-400">{project.subtitle}</p>
            </div>

            {/* About */}
            <div className="mb-7">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-white">
                <FaLaptopCode className="text-blue-500" />
                About Project
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                {project.description}
              </p>
            </div>

            {/* Contribution */}
            <div className="mb-7">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-white">
                <FaCode className="text-blue-500" />
                My Contribution
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                {project.contribution}
              </p>
            </div>

            {/* Features */}
            <div className="mb-7">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
                <FaLayerGroup className="text-blue-500" />
                Key Features
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-gray-300"
                  >
                    <FaShieldAlt className="mt-1 shrink-0 text-blue-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
                <FaTools className="text-blue-500" />
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <span
                      key={index}
                      className="flex items-center gap-2 rounded-xl border border-blue-500/20 px-4 py-3 text-sm text-gray-300"
                    >
                      <Icon className="text-lg text-blue-400" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <FaCalendarAlt className="text-blue-500" />
                {project.year}
              </span>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-600"
                >
                  <FaGithub className="text-xl" />
                  View on GitHub
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Projects Page
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-5 py-24 text-white md:px-12 lg:px-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-[#0a0a0a] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#0a0a0a]blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-5 py-2 text-sm font-semibold text-orange-400">
            <FaCode />
            My Portfolio
          </span>

          <h1 className="mb-5 text-4xl font-extrabold md:text-6xl">
            My <span className="text-blue-500">Projects</span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Explore some of the projects I have worked on, showcasing my skills
            in frontend development, backend development, and software
            engineering.
          </p>

          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-orange-500" />
        </motion.div>

        {/* Project Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm text-gray-400">
            <FaLayerGroup className="text-blue-500" />
            Featured Projects
          </p>

          <span className="rounded-full border border-orange/10  px-4 py-2 text-sm text-blue-400">
            {projects.length} Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onView={setSelectedProject}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-white/10 p-8 text-center md:p-12"
        >
          <FaLaptopCode className="mx-auto mb-5 text-4xl text-blue-500" />

          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-gray-400">
            I'm always interested in learning new technologies and collaborating
            on exciting projects.
          </p>

          <a
            href="/ContactUs"
            className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-orange-600"
          >
            Contact Me
            <FaArrowRight />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
