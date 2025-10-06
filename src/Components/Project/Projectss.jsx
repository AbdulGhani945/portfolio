import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { DNA } from "react-loader-spinner";
import blog from "./images/blog.jpg";
import pimg from "./images/pimg.jpg";
import ecom from "./images/ecom.png";

const Projectss = () => {
 const [loader, setLoader] = useState(true);

  // Hide loader after 1s
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing my skills, projects, and experience.",
      img: pimg,
      link: "/project-1-Detail",
    },
    {
      id: 2,
      title: "E-commerce Store",
      desc: "A modern e-commerce platform with cart, product filters, and payments.",
      img: blog,
      link: "/project-2-Detail",
    },
    {
      id: 3,
      title: "Blog App",
      desc: "A responsive blog application with authentication and CRUD operations.",
      img: ecom,
      link: "/project-3-Detail",
    },
    {
      id: 4,
      title: "Extra Project 1",
      desc: "This is another cool project.",
      img: blog,
      link: "/project-4-Detail",
    },
    {
      id: 5,
      title: "Extra Project 2",
      desc: "Yet another awesome project.",
      img: ecom,
      link: "/project-5-Detail",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // ✅ Loader screen
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

  return (
    <section className="projects min-h-[70vh] bg-[#031030] px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-12">
          My <span className="text-indigo-500">Projects</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1c1c4b] rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/50"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-200">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
                <Link
                  to={project.link}
                  className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-md hover:scale-105 transition cursor-pointer"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
        {!showAll && projects.length > 3 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
}

export default Projectss
