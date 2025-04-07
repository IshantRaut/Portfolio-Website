import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import IshantImage from '../assets/IshantImage.jpeg';
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-950 py-16"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <UsersIcon className="w-12 h-12 text-indigo-400 inline-block mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
          Professional Experience
        </h2>

        <div className="flex justify-center">
          <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-10 max-w-3xl w-full text-left text-gray-300">
            <TerminalIcon className="w-10 h-10 text-indigo-400 mb-6 mx-auto" />

            <p className="mb-4 leading-relaxed">
              <span className="font-semibold text-white">Role:</span> Teaching Assistant<br />
              <span className="font-semibold text-white">Company:</span> Coding Ninjas<br />
              <span className="font-semibold text-white">Type:</span> Full-time<br />
              <span className="font-semibold text-white">Duration:</span> Dec 2023 to Present (1 year 5 months)<br />
              <span className="font-semibold text-white">Notice Period:</span> Immediate
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">Responsibilities:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Taking doubt sessions</li>
                <li>Debugging codes</li>
                <li>Helping students in their assignments & various projects</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">Top Skills:</h4>
              <p className="text-sm">HTML, CSS, JavaScript, Node.js, Express, MongoDB, Socket.io</p>
            </div>

            <div className="flex items-center mt-6">
              <img
                alt="testimonial"
                src={IshantImage}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
              />
              <div className="ml-4">
                <p className="text-white font-semibold">Teaching Assistant</p>
                <p className="text-sm text-gray-400 uppercase">Coding Ninjas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
