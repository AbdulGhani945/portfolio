import React ,{useState , useEffect} from "react";
import ghani from "./image/ghani.jpg";
import resume from "./image/resume.pdf";
import { motion } from "framer-motion";
import { DNA } from "react-loader-spinner";
function About() {
  const [loader ,setloader] =useState(true);
  
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setloader(false);
      }, 1000); 
  
      return () => clearTimeout(timer);
    }, []);
  
     if (loader) {
      return (
        <div className="flex justify-center items-center h-screen bg-black">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
          />
        </div>
      );
    }
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#031030] px-6 py-12 sticky">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-gray-100 text-center md:text-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent"> About Me</h1>
          <p className="text-base md:text-lg mb-6">
            Hi, I’m <span className="font-semibold">Abdul Ghani</span>, With a
            Bachelor's degree in Software Engineering, I have a strong
            foundation in web development, user experience design, and front-end
            technologies. My expertise in programming, responsive design, and
            performance optimization allows me to create seamless, dynamic
            websites and applications. I am passionate about building
            user-centered web solutions that enhance both functionality and user
            experience, while leveraging the latest web technologies to deliver
            high-performing, scalable applications.
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View Resume
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={ghani}
            alt="About Me"
            className="rounded-2xl shadow-lg w-72 md:w-80 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
