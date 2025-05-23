import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwplwbdk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="bg-gray-950 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/3 bg-gray-900 p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-white text-3xl font-bold mb-6 tracking-tight">
            Let’s Connect
          </h2>
          <div className="space-y-5 text-gray-400 text-base">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-indigo-500 text-xl" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-500 text-xl" />
              <a href="mailto:ishjee2018@gmail.com" className="hover:text-white transition">
                ishjee2018@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-indigo-500 text-xl" />
              <span>+91 9370839516</span>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-indigo-500 text-xl" />
              <a
                href="https://github.com/IshantRaut"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-indigo-500 text-xl" />
              <a
                href="https://www.linkedin.com/in/ishant-raut-9b4a511b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 w-full bg-gray-900 p-8 md:p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-white text-3xl font-semibold mb-4">Hire Me</h3>
          <p className="text-gray-400 mb-6">
            I'm currently open to exciting opportunities where I can contribute my skills and grow as a developer. Whether you're looking to hire for a full-time role or a freelance project — let's connect and create something impactful!
          </p>

          {success && (
            <div className="bg-green-700 text-white p-4 mb-4 rounded-md">
              ✅ Your message has been sent successfully!
            </div>
          )}

          <label className="block mb-4">
            <span className="text-gray-300 text-sm">Name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:ring-2 focus:ring-indigo-600"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-300 text-sm">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:ring-2 focus:ring-indigo-600"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-300 text-sm">Message</span>
            <textarea
              name="message"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white px-4 py-2 h-32 resize-none focus:ring-2 focus:ring-indigo-600"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-2 px-6 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
