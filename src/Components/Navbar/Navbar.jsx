import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./Images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Active link checker
  const isActiveLink = (to) => {
    const path = location.pathname;

    if (to === "/") return path === "/";
    if (to === "/projects") {
      return path === "/projects" || path.startsWith("/projects") || path.startsWith("/project-");
    }
    return path === to || path.startsWith(to);
  };

  const linkClasses = (to) =>
    `relative cursor-pointer after:block after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300
     ${
       isActiveLink(to)
         ? "text-blue-800 after:w-full"
         : "text-white hover:text-blue-800 after:w-0 hover:after:w-full"
     }`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full shadow-md z-10">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center 
        bg-gradient-to-r from-[rgba(0,123,255,1)] via-[rgb(0,200,200)] to-[rgb(0,255,150)] text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img src={logo} alt="logo" className="h-16 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl font-medium ml-36">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={() => linkClasses(link.to)}>
              {link.label}
            </NavLink>
          ))}
        </ul>

        {/* Contact Button (desktop) */}
        <NavLink to="/contact">
          <button className="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Contact
          </button>
        </NavLink>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[rgb(0,123,255)] flex flex-col items-center px-6 py-6 space-y-6 text-lg font-medium text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={() => linkClasses(link.to)}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            <button className="w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition duration-300">
              Contact
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
