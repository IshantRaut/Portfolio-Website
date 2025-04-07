import React from 'react';
import IshantImage from '../assets/IshantImage.jpeg';

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="text-gray-300 bg-gradient-to-b from-gray-900 to-black font-['Poppins'] border-green-500 shadow-xl"
      >
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold tracking-wider drop-shadow-md">
              <span className="text-purple-300 drop-shadow-sm">Hi, I'm</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg transition duration-300 hover:scale-105 hover:brightness-125">
                Ishant
              </span>
              <br className="hidden lg:inline-block" />
              <span className="text-white text-4xl">
                Turning ideas into fast, responsive, and beautiful web apps is what I do best.
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-400">
              I'm a passionate <span className="text-green-400 font-semibold">Full Stack Developer</span> with hands-on
              experience in building dynamic and responsive web applications. I specialize in technologies like{' '}
              <span className="text-green-400">HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL</span>.
              Whether it's crafting beautiful user interfaces or designing powerful APIs, I strive to write clean,
              efficient, and scalable code.
            </p>
            <p className="mb-8 leading-relaxed text-lg text-gray-400">
              With a strong problem-solving mindset and a solid grasp of{' '}
              <span className="text-green-400">frontend, backend, and database management</span>, I'm eager to contribute
              to meaningful and innovative projects. Let's build something amazing together!
            </p>

            {/* Button Group with Resume Download */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg shadow-md transition duration-300"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="inline-flex text-gray-300 bg-gray-800 border border-gray-600 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg transition duration-300"
              >
                See My Projects
              </a>
              <a
                href="/assets/Ishant_Resume.pdf"
                download="Ishant_Resume"
                className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-lg shadow-md transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-64 h-64 mx-auto">
            <img
              className="w-full h-full object-cover object-center rounded-full shadow-lg border-4 border-green-500"
              alt="hero"
              src={IshantImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
