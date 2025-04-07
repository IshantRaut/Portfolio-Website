import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <ChipIcon className="w-12 h-12 text-teal-400 inline-block mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            I work with a range of technologies in the web development world — from front-end frameworks to back-end services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 bg-opacity-90 rounded-xl shadow-lg px-6 py-4 flex items-center space-x-4 min-w-[250px] hover:bg-gray-700 transition-all"
            >
              <BadgeCheckIcon className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
