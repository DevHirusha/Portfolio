import React from "react";
import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaCertificate,
  FaExternalLinkAlt,
  FaUniversity,
  FaSchool,
  FaDatabase,
  FaFileExcel,
  FaPython,
  FaCode,
  FaBookOpen,
} from "react-icons/fa";

const academicQualifications = [
  {
    title: "G.C.E. Ordinary Level",
    short: "O/L",
    description: "General Certificate of Education - Ordinary Level",
    icon: <FaSchool />,
  },
  {
    title: "G.C.E. Advanced Level",
    short: "A/L",
    description: "General Certificate of Education - Advanced Level",
    icon: <FaGraduationCap />,
  },
  {
    title: "ESOFT",
    short: "ESOFT Education",
    description: "Additional education and professional learning",
    icon: <FaBookOpen />,
  },
  {
    title: "Bachelor of Science Honours in Information Technology",
    short: "SLIIT",
    description: "Specialized in Information Technology | 2023 - Present",
    icon: <FaUniversity />,
  },
];

const certificates = [
  {
    title: "G.C.E. Ordinary Level",
    organization: "Department of Examinations, Sri Lanka",
    image: "/ol-certificate.jpeg",
    description:
      "Successfully completed the General Certificate of Education Ordinary Level examination, demonstrating foundational academic knowledge and skills.",
    skills: [
      "General Education",
      "Academic Knowledge",
      "Problem Solving",
      "Communication",
    ],
    icon: <FaGraduationCap />,
    color: "text-blue-400",
    link: "/ol-certificate.jpeg",
  },
  {
    title: "G.C.E. Advanced Level",
    organization: "Department of Examinations, Sri Lanka",
    image: "/al-certificate.jpeg",
    description:
      "Successfully completed the General Certificate of Education Advanced Level examination, developing subject-specific knowledge, analytical thinking, and problem-solving skills.",
    skills: [
      "Advanced Education",
      "Analytical Thinking",
      "Critical Thinking",
      "Problem Solving",
    ],
    icon: <FaGraduationCap />,
    color: "text-orange-400",
    link: "/al-certificate.jpeg",
  },
{
  title: "AWS Cloud Practitioner Essentials",
  organization: "Amazon Web Services (AWS)",
  image: "/aws-certificate.png",
  description:
    "Successfully completed the AWS Cloud Practitioner Essentials training, gaining foundational knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support.",
  skills: [
    "Amazon Web Services (AWS)",
    "Cloud Computing",
    "AWS Cloud Fundamentals",
    "Cloud Security",
    "AWS Core Services",
    "Cloud Architecture",
  ],
  icon: <FaGraduationCap  />,
  color: "text-orange-400",
  link: "/aws-certificate.png",
},
  
  {
    title: "Assured Diploma in Information Technology(DITEC)",
    organization: "Esoft Metro Campus",
    image: "/ditec-certificate.jpeg",
    description:
      "Completed the Assured Diploma in Information Technology, gaining comprehensive knowledge of information technology principles, programming, and database management.",
    skills: [
      "Information Technology",
      "Programming",
      "Photoshop",
      "Software Development",
      "Problem Solving",
    ],
    icon: <FaGraduationCap />,
    color: "text-green-400",
    link: "#",
  },
  {
    title: "Python Essentials 1",
    organization: "Cisco Networking Academy",
    image: "/python-essentials-1.png",
    description:
      "Successfully completed Python Essentials 1, developing fundamental knowledge of Python programming, programming concepts, and problem-solving.",
    skills: [
      "Python (Programming Language)",
      "Exception Handling",
      "Algorithms",
      "Programming",
      "Problem Solving",
    ],
    icon: <FaPython />,
    color: "text-blue-400",
    link: "#",
  },
  {
    title: "Introduction to MS Excel",
    organization: "Simplilearn",
    image: "/ms-excel-certificate.png",
    description:
      "Completed Introduction to MS Excel, gaining knowledge of spreadsheet management, data analysis, formulas, functions, pivot tables, and data visualization.",
    skills: [
      "Microsoft Excel",
      "Data Analysis",
      "Excel Formulas and Functions",
      "Pivot Tables",
      "Data Visualization",
    ],
    icon: <FaFileExcel />,
    color: "text-green-400",
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#0a0a0a] text-white px-5 py-20 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* LEFT SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24 h-fit"
        >
          <div className="border border-slate-700 rounded-2xl p-7">
            <h2 className="text-2xl font-bold leading-tight">
              HIRUSHA
              <span className="block text-blue-500">DILSHAN ALWIS</span>
            </h2>

            <p className="text-gray-400 text-sm mt-3">
              Undergraduate IT Student | Software Developer
            </p>

            <div className="h-px bg-slate-700 my-7" />

            <p className="text-xs text-gray-500 font-semibold tracking-widest mb-5">
              NAVIGATION
            </p>

            <nav className="flex flex-col gap-5 text-gray-300 text-sm">
              <a href="#education" className="hover:text-orange-500 transition">
                <FaGraduationCap className="inline mr-3" />
                Education
              </a>

              <a href="#academic" className="hover:text-orange-500 transition">
                <FaUniversity className="inline mr-3" />
                Qualifications
              </a>

              <a
                href="#certificates"
                className="hover:text-orange-500 transition"
              >
                <FaCertificate className="inline mr-3" />
                Certifications
              </a>

              <a href="#technical" className="hover:text-orange-500 transition">
                <FaCode className="inline mr-3" />
                Technical Learning
              </a>
            </nav>

            <div className="h-px bg-slate-700 my-7" />

            <p className="text-xs text-gray-500 font-semibold tracking-widest">
              MY APPROACH
            </p>

            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Continuously learning new technologies and improving my technical
              knowledge through practical experience.
            </p>
          </div>
        </motion.aside>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8">
          {/* PAGE HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-500 font-semibold tracking-widest text-sm">
              MY LEARNING JOURNEY
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Education &<span className="text-orange-500"> Credentials</span>
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
              My academic qualifications, professional certifications, and
              technical learning experiences.
            </p>
          </motion.div>

          {/* ACADEMIC QUALIFICATIONS */}
          <motion.div
            id="academic"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-slate-700 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <FaGraduationCap className="text-orange-500 text-2xl" />

              <h2 className="text-2xl font-bold">Academic Qualifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {academicQualifications.map((item, index) => (
                <motion.div
                  key={item.short}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-slate-700 rounded-xl p-5 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 text-2xl">{item.icon}</span>

                    <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
                      {item.short}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg leading-snug text-gray-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CERTIFICATIONS */}
          <div id="certificates" className="flex flex-col gap-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-orange-500 text-sm font-semibold tracking-widest">
                PROFESSIONAL DEVELOPMENT
              </p>

              <h2 className="text-3xl font-bold mt-2">
                Certificates & Credentials
              </h2>

              <p className="text-gray-400 text-sm mt-3">
                Academic certificates and professional learning achievements.
              </p>
            </motion.div>

            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* CERTIFICATE HEADING */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`text-3xl ${cert.color}`}>{cert.icon}</span>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {cert.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {cert.organization}
                    </p>
                  </div>
                </div>

                {/* CERTIFICATE IMAGE */}
                <div className="rounded-xl p-3 md:p-5">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    loading="lazy"
                    className="w-full max-h-[450px] object-contain rounded-lg"
                  />
                </div>

                {/* CERTIFICATE DESCRIPTION */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold mb-3">
                    About this Certificate
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* SKILLS */}
                  <div className="mt-7">
                    <h4 className="font-bold text-lg mb-4">Skills Gained</h4>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-[#0f172a] border border-slate-600 text-gray-300 text-sm px-4 py-2 rounded-full hover:border-blue-500 hover:text-blue-400 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* VIEW CERTIFICATE BUTTON */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-7 bg-blue-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  >
                    View Certificate
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TECHNICAL LEARNING */}
          <motion.div
            id="technical"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-slate-700 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaDatabase className="text-orange-500 text-2xl" />

              <h2 className="text-2xl font-bold">
                Technical Learning & Practice
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* MONGODB */}
              <div className="border border-slate-700 rounded-xl p-5 hover:border-orange-500 transition">
                <FaDatabase className="text-green-400 text-2xl mb-4" />

                <h3 className="font-bold text-lg">MongoDB CRUD Operations</h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Practical experience with MongoDB database operations,
                  including creating, reading, updating, and deleting documents.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["MongoDB", "CRUD", "Database Management"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-[#0f172a] text-gray-300 px-3 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* EXCEL */}
              <div className="border border-slate-700 rounded-xl p-5 hover:border-orange-500 transition">
                <FaFileExcel className="text-green-400 text-2xl mb-4" />

                <h3 className="font-bold text-lg">Microsoft Excel</h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Learning spreadsheet management, formulas, functions, data
                  analysis, pivot tables, and data visualization.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["Excel", "Data Analysis", "Data Visualization"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-[#0f172a] text-gray-300 px-3 py-2 rounded-full"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* FOOTER */}
          <div className="text-center text-gray-500 text-sm py-5">
            Always Learning • Always Growing • Always Building
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
