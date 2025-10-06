import React, { useEffect, useState } from "react";
import background from "./Image/background.png";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";
import { DNA } from "react-loader-spinner";
import Projectss from "../Project/Projectss";

function Home() {
  const [loader, setLoader] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000); // Loader for 1 second
    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <DNA
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
        />
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="h-[100vh] w-full flex items-center justify-center text-white sticky">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900/80 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Abdul Ghani
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-6 text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I build modern, scalable, and high-performance web applications using{" "}
            <span className="font-semibold text-white">MongoDB</span>,{" "}
            <span className="font-semibold text-white">Express.js</span>,{" "}
            <span className="font-semibold text-white">React</span>, and{" "}
            <span className="font-semibold text-white">Node.js</span>. Passionate
            about clean code, smooth UI, and powerful performance.
          </motion.p>

         
        </div>
      </section>

      {/* SECTIONS */}
      <About />
      <Skills />
      <Projectss />
      <Contact />
    </>
  );
}

export default Home;
