import React from "react";
import { FaGithub, FaLinkedin, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" bg-[#1c1c4b] text-white py-3 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      
          <div className="text-center text-md text-gray-200 mt-2"> © 2025 Abdul Ghani. All rights reserved.
      </div>
        <div className="flex gap-4 text-xl">
          
          <a
            href="https://www.linkedin.com/in/abdul-ghani-6ab853388/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition">
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+923211130889"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
