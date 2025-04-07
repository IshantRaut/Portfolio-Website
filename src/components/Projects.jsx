import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-gray-300 bg-gradient-to-tr from-gray-800 via-gray-900 to-black py-16"
    >
      <div className="container px-6 md:px-12 mx-auto text-center">
        <div className="mb-16">
          <CodeIcon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apps I've Built
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of the full-stack and front-end projects I've developed recently — using technologies like React, Node.js, MongoDB, and more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.image}
              className="w-full sm:w-[45%] lg:w-[30%] group relative overflow-hidden rounded-xl border border-gray-700 shadow-md hover:shadow-green-400/40 transition-shadow duration-300"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                  <h3 className="text-indigo-300 text-sm font-semibold tracking-wider animate-fadeInUp delay-100">
                    {project.subtitle}
                  </h3>
                  <h2 className="text-white text-lg font-bold animate-fadeInUp delay-200">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 justify-center animate-fadeInUp delay-300">
                    {project.subtitle.split(" and ").map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-green-300 text-xs font-medium px-2 py-0.5 rounded-full border border-green-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm animate-fadeInUp delay-400">
                    {project.description}
                  </p>

                  {/* GitHub & Live Buttons */}
                  <div className="flex gap-4 mt-4 animate-fadeInUp delay-500">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm border border-indigo-400 text-indigo-300 rounded hover:bg-indigo-500 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm border border-green-400 text-green-300 rounded hover:bg-green-500 hover:text-white transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
