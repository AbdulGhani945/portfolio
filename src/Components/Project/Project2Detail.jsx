import React, { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import ecom from "./images/ecom.png";

function ProjectPage() {
  const [loader, setLoader] = useState(true);

  // Loader disappears after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const technologies = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

  // ✅ Show loader first
  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <DNA
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          color="#38bdf8"
        />
      </div>
    );
  }

  // ✅ Show actual page after loader
  return (
    <div className="min-h-screen bg-[#09093f] text-white p-6 sm:p-10">
      <div className="max-w-5xl mx-auto">
        <img
          src={ecom}
          alt="Project"
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-6 shadow-lg"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          My Awesome Project
        </h1>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          This is a sample project showcase page built with React and Tailwind CSS.
          It displays the project image, title, description, and technologies used
          in a clean and simple layout. This is a sample project showcase page
          built with React and Tailwind CSS. It displays the project image, title,
          description, and technologies used in a clean and simple layout.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Technologies Used:
        </h2>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-white text-[#5f5fb4] px-3 py-1 rounded-full text-sm sm:text-base font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
