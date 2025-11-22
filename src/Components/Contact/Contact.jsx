// import React, { useState, useEffect } from "react";
// import { DNA } from "react-loader-spinner";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaWhatsapp,
//   FaPaperPlane,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function ContactPage() {
//   const [loader, setLoader] = useState(true);
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(null);

//   // ✅ Hide loader after 1s
//   useEffect(() => {
//     const timer = setTimeout(() => setLoader(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loader) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-black">
//         <DNA
//           visible={true}
//           height="100"
//           width="100"
//           ariaLabel="dna-loading"
//           color="#38bdf8"
//         />
//       </div>
//     );
//   }

//   // ✅ Handle input
//   function handleChange(e) {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   }

//   // ✅ Handle submit (without EmailJS)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus({ type: "sending", msg: "Sending..." });

//     setTimeout(() => {
//       console.log("Form submitted:", form);
//       setStatus({ type: "sent", msg: "✅ Message saved (demo mode)" });
//       setForm({ firstName: "", lastName: "", email: "", message: "" });
//     }, 1000);
//   };

//   // ✅ Animations
//   const container = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.5 } },
//   };
//   const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

//   return (
//     <div className="min-h-screen bg-[#031030] flex flex-col items-center justify-center p-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-10 text-center"
//       >
//         Contact <span className="text-indigo-500">Us</span>
//       </motion.h1>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="w-full max-w-4xl bg-[#1c1c4b] shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 mt-2 md:grid-cols-2"
//       >
//         {/* Left side */}
//         <motion.div
//           variants={item}
//           className="p-8 md:p-12 flex flex-col mt-4 gap-4 border-r border-gray-200"
//         >
//           <div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-200">
//               Get in touch
//             </h2>
//             <p className="mt-2 text-gray-400">
//               Have a project or question? Fill the form — I usually reply within
//               24 hours.
//             </p>
//           </div>

//           <motion.div variants={item} className="flex items-start gap-4 mt-5">
//             <div className="p-3 rounded-xl bg-gray-200">
//               <FaEnvelope className="w-6 h-6 text-slate-700" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-200">Email</p>
//               <p className="font-medium text-gray-400">
//                 imabdulghani9945@gmail.com
//               </p>
//             </div>
//           </motion.div>

//           <motion.div variants={item} className="flex items-start gap-2 mt-3">
//             <div className="p-3 rounded-xl bg-gray-200">
//               <FaPhone className="w-6 h-6 text-slate-700 " />
//             </div>
//             <div>
//               <p className="text-sm text-gray-200">Phone</p>
//               <p className="font-medium text-gray-400">0321-1130889</p>
//             </div>
//           </motion.div>

//           <motion.div variants={item} className="mt-10">
//             <p className="text-xs text-slate-500">Follow</p>
//             <div className="flex gap-4 mt-3 text-2xl">
//               <a
//                 href="https://www.linkedin.com/in/abdul-ghani-6ab853388/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
//               </a>
//               <a href="https://github.com" target="_blank" rel="noreferrer">
//                 <FaGithub className="text-gray-200 hover:scale-110 transition-transform" />
//               </a>
//               <a
//                 href="https://wa.me/+923211130889"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right side (Form) */}
//         <motion.div variants={item} className="p-8 md:p-12">
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 required
//                 placeholder="First name"
//                 className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
//               />
//               <input
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 required
//                 placeholder="Last name"
//                 className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
//               />
//             </div>

//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="Email address"
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
//             />

//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               rows={6}
//               required
//               placeholder="Your message"
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
//             />

//             <div className="flex items-center justify-between gap-4">
//               <div
//                 className={`text-sm ${
//                   status?.type === "error"
//                     ? "text-red-400"
//                     : status?.type === "sent"
//                     ? "text-green-400"
//                     : "text-gray-400"
//                 }`}
//               >
//                 {status?.msg}
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 disabled={status?.type === "sending"}
//                 className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-white font-semibold shadow-lg"
//               >
//                 <FaPaperPlane className="w-4 h-4" />
//                 <span>
//                   {status?.type === "sending" ? "Sending..." : "Send message"}
//                 </span>
//               </motion.button>
//             </div>

//             <p className="text-xs text-slate-400">
//               By sending you agree to our{" "}
//               <a className="underline">terms</a> and{" "}
//               <a className="underline">privacy policy</a>.
//             </p>
//           </form>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [loader, setLoader] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  // ✅ Your EmailJS credentials (paste here)
  const SERVICE_ID = "service_zwwzuqg";
  const TEMPLATE_ID = "template_bxxbuhg";
  const PUBLIC_KEY = "OkflT5oGJ83Dj-gAK";

  // ✅ Hide loader after 1s
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  // ✅ Handle input
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // ✅ Send message via EmailJS (Frontend Only)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "sending", msg: "Sending..." });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      setStatus({ type: "sent", msg: "✅ Message sent successfully!" });
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", msg: "❌ Failed to send. Try again." });
    }
  };

  // ✅ Animations
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-[#031030] flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-10 text-center"
      >
        Contact <span className="text-indigo-500">Us</span>
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl bg-[#1c1c4b] shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 mt-2 md:grid-cols-2"
      >
        {/* Left side */}
        <motion.div
          variants={item}
          className="p-8 md:p-12 flex flex-col mt-4 gap-4 border-r border-gray-200"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-200">
              Get in touch
            </h2>
            <p className="mt-2 text-gray-400">
              Have a project or question? Fill the form — I usually reply within
              24 hours.
            </p>
          </div>

          <motion.div variants={item} className="flex items-start gap-4 mt-5">
            <div className="p-3 rounded-xl bg-gray-200">
              <FaEnvelope className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Email</p>
              <p className="font-medium text-gray-400">
                imabdulghani9945@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex items-start gap-2 mt-3">
            <div className="p-3 rounded-xl bg-gray-200">
              <FaPhone className="w-6 h-6 text-slate-700 " />
            </div>
            <div>
              <p className="text-sm text-gray-200">Phone</p>
              <p className="font-medium text-gray-400">0321-1130889</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="text-xs text-slate-500">Follow</p>
            <div className="flex gap-4 mt-3 text-2xl">
              <a
                href="https://www.linkedin.com/in/abdul-ghani-6ab853388/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="text-gray-200 hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/+923211130889"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side (Form) */}
        <motion.div variants={item} className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="First name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder="Your message"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
            />

            <div className="flex items-center justify-between gap-4">
              <div
                className={`text-sm ${
                  status?.type === "error"
                    ? "text-red-400"
                    : status?.type === "sent"
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {status?.msg}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status?.type === "sending"}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-white font-semibold shadow-lg"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span>
                  {status?.type === "sending" ? "Sending..." : "Send message"}
                </span>
              </motion.button>
            </div>

            <p className="text-xs text-slate-400">
              By sending you agree to our{" "}
              <a className="underline">terms</a> and{" "}
              <a className="underline">privacy policy</a>.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

