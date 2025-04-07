import React from "react";
import { certificates } from "../data";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 text-gray-300"
    >
      <div className="container px-6 md:px-12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">My Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-5 text-center">
                <h3 className="text-xl font-bold text-green-400 mb-2">{cert.title}</h3>
                <p className="text-sm italic text-gray-400">{cert.platform}</p>
                <p className="mt-2 text-sm">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-500 hover:text-white transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
