import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHandPointLeft,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import assets from "../assets/assets.js";

const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const formRef = useRef(null);

  // Send Email Function
  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans">
      {/* Main Contact Section */}
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-20">
        {/* Text & Button */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-300 mb-6">
            Contact<span className="text-orange-500">Us</span>
          </h1>

          <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
            I'm always open to discussing new projects, creative ideas, and
            opportunities to be part of your vision. Whether you have a question
            or just want to connect, feel free to reach out!
          </p>

          {/* Click Me Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setShowForm(!showForm);
                setStatus("");
              }}
              className="bg-[#042085] hover:bg-blue-700 text-white
              font-medium py-3 px-8 rounded-full transition-all
              duration-300 shadow-lg hover:scale-105"
            >
              {showForm ? "Hide Form" : "Click Me"}
            </button>

            {!showForm && (
              <FaHandPointLeft className="click-hand text-4xl text-orange-500" />
            )}
          </div>
        </div>

        {/* Right Image Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="contact-3d-wrapper">
            <img
              src={assets.contactImage}
              alt="Contact Illustration"
              className="contact-3d-image"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      {showForm && (
        <div className="w-full bg-[#151515] py-20 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            {/* Contact Information */}
            <div className="text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  Contact Us<span className="text-orange-500">.</span>
                </h2>

                {/* Location */}
                <div className="border-l-2 border-[#087195] pl-6 mt-10 mb-8">
                  <h3 className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                    Location
                  </h3>

                  <p className="text-gray-200">Biyagama</p>
                  <p className="text-gray-200">Western Province</p>
                  <p className="text-gray-200">Sri Lanka</p>
                </div>

                {/* Contact Details */}
                <div className="border-l-2 border-[#cc5c06] pl-6">
                  <h3 className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                    Contacts
                  </h3>

                  <p className="text-gray-200">hdrxdev@gmail.com</p>
                  <p className="text-gray-200">+94 70 650 8048</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-16 md:mt-0">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-[#104fa0] transition"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-[#104fa0] transition"
                >
                  <FaTwitter size={18} />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-[#104fa0] transition"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#242424] p-8 md:p-10 rounded-lg border-b-4 border-[#0c4ba8] shadow-2xl">
              <h3 className="text-white text-xl font-semibold mb-8 text-center">
                Contact Form
              </h3>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-6"
              >
                {/* Name */}
                <div>
                  <label className="text-gray-400 text-xs uppercase mb-2 block">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full bg-transparent border-b border-gray-600
                    text-white py-2 focus:outline-none
                    focus:border-[#db7610] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-400 text-xs uppercase mb-2 block">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    maxLength={150}
                    className="w-full bg-transparent border-b border-gray-600
                    text-white py-2 focus:outline-none
                    focus:border-[#db7610] transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-gray-400 text-xs uppercase mb-2 block">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    maxLength={150}
                    className="w-full bg-transparent border-b border-gray-600
                    text-white py-2 focus:outline-none
                    focus:border-[#db7610] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-400 text-xs uppercase mb-2 block">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Write your message..."
                    required
                    minLength={5}
                    maxLength={3000}
                    className="w-full bg-transparent border-b border-gray-600
                    text-white py-2 focus:outline-none
                    focus:border-[#db7610] transition-colors resize-none"
                  />
                </div>

                {/* Time Field */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                {/* Success Message */}
                {status === "success" && (
                  <div
                    className="flex items-center gap-3 bg-green-500/10
                  border border-green-500/30 text-green-400
                  p-4 rounded-lg text-sm"
                  >
                    <FaCheckCircle className="text-lg shrink-0" />

                    <span>Your message has been sent successfully!</span>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 bg-red-500/10
                  border border-red-500/30 text-red-400
                  p-4 rounded-lg text-sm"
                  >
                    <FaExclamationCircle className="text-lg shrink-0" />

                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#2667f4] hover:bg-[#eb9b10]
                  disabled:opacity-60 disabled:cursor-not-allowed
                  text-white font-bold uppercase tracking-wider
                  py-4 mt-4 rounded transition-colors cursor-pointer
                  flex items-center justify-center gap-3"
                >
                  {sending ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
