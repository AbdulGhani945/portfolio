import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DNA } from "react-loader-spinner";

function Skills() {
  const [loader, setLoader] = useState(true);
  const [animateBars, setAnimateBars] = useState(false);

  // show loader for 1s
  useEffect(() => {
    const t = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(t);
  }, []);

  // start bar animation a short time after loader hides
  useEffect(() => {
    if (!loader) {
      const t = setTimeout(() => setAnimateBars(true), 1000);
      return () => clearTimeout(t);
    }
  }, [loader]);

  // adaptive counter animation utility
  const animateCountTo = (target, setter, duration = 2000, interval = 50) => {
    let current = 0;
    const steps = Math.max(1, Math.ceil(duration / interval));
    const increment = Math.ceil(target / steps);

    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(id);
      } else {
        setter(current);
      }
    }, interval);

    return id;
  };

  // counters (start only after loader hides)
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    if (loader) return; // don't start while loading

    // adjust durations/intervals per counter if you like
    const idY = animateCountTo(2, setYears, 1200, 80);       // Years -> small target
    const idP = animateCountTo(300, setProjects, 1400, 50);  // Projects
    const idC = animateCountTo(500, setClients, 1600, 50);   // Clients

    return () => {
      clearInterval(idY);
      clearInterval(idP);
      clearInterval(idC);
    };
  }, [loader]);

  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
      </div>
    );
  }

  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" size={50} /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" size={50} /> },
    { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400" size={50} /> },
    { name: "React", level: 75, icon: <FaReact className="text-cyan-400" size={50} /> },
    { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-teal-400" size={50} /> },
  ];

  return (
    <section className="skills min-h-[60vh] flex flex-col items-center justify-center bg-[#031030] px-6 py-12">
      <div className="max-w-6xl mx-auto text-center w-full">
        <h1 className="skills-heading text-4xl md:text-5xl font-bold text-red-600 mb-10">
          My <span className="text-indigo-500">Skills</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:justify-center gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex flex-col items-center bg-[#1c1c4b] p-6 rounded-xl shadow-md w-full sm:w-40 md:w-48 h-64 transition-transform duration-300 transform hover:scale-105"
            >
              {skill.icon}
              <p className="text-lg font-semibold text-gray-200 mt-3">{skill.name}</p>

              {/* Progress Bar: width animates from 0 -> level when animateBars becomes true */}
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-indigo-500 transition-all duration-1000 ease-out"
                  style={{ width: animateBars ? `${skill.level}%` : "0%" }}
                />
              </div>

              <span className="text-sm text-gray-200 mt-3">{skill.level}%</span>
            </div>
          ))}
        </div>

        <h1 className="skills-heading text-4xl md:text-5xl font-bold text-red-600 mt-16 mb-10">
          My <span className="text-indigo-500">Experience</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="skill-card bg-[#1c1c4b] p-6 rounded-xl shadow-md w-72 mx-auto transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-bold text-white">{years}+</h2>
            <p className="text-gray-200 mt-2">Years Experience</p>
          </div>

          <div className="skill-card bg-[#1c1c4b] p-6 rounded-xl shadow-md w-72 mx-auto transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-bold text-white">{projects}+</h2>
            <p className="text-gray-200 mt-2">Projects Completed</p>
          </div>

          <div className="skill-card bg-[#1c1c4b] p-6 rounded-xl shadow-md w-72 mx-auto transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-bold text-white">{clients}+</h2>
            <p className="text-gray-200 mt-2">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
