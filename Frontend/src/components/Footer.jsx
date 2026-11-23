import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/DevHirusha",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/dev-alwis-7592a4429/",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/Skill" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/ContactUs" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-5 pt-16 text-white md:px-12 lg:px-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/#home"
              className="mb-5 inline-flex items-center gap-2 text-3xl font-extrabold"
            >
              <FaCode className="text-orange-500" />
              <span>
                DevHirusha<span className="text-orange-500">.</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Passionate Information Technology undergraduate interested in
              building modern, responsive, and user-friendly web applications.
            </p>

            <a
              href="mailto:hdrxdev@gmail.com"
              className="mt-6 inline-flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-orange-400"
            >
              <FaEnvelope className="text-orange-500" />
              hdrxdev@gmail.com
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="mb-6 text-lg font-bold">
              Quick <span className="text-orange-500">Links</span>
            </h3>

            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-all hover:translate-x-2 hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-bold">
              Connect <span className="text-orange-500">With Me</span>
            </h3>

            <p className="mb-6 text-sm leading-7 text-gray-400">
              Let's connect and explore opportunities to work together and build
              something amazing.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -6, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-300 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-orange-400">
              Hirusha Dilshan Alwis
            </span>
            . All Rights Reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-gray-500">
            Designed & Developed with
            <FaHeart className="text-orange-500" />
            by Hirusha
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-orange-600"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
