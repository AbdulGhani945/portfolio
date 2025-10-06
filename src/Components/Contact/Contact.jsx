import React, { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import {
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [loader, setLoader] = useState(true);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    // ✅ Loader hides after 1s
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // If loader true → show spinner
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

    // Handle inputs
    function handleChange(e) {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    // Validation
    function validate() {
        if (!form.firstName.trim() || !form.lastName.trim())
            return "Please enter your full name.";
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            return "Please enter a valid email.";
        if (!form.message.trim() || form.message.length < 10)
            return "Message must be at least 10 characters.";
        return null;
    }

    // Submit handler
    async function handleSubmit(e) {
        e.preventDefault();
        const err = validate();
        if (err) {
            setStatus({ type: "error", msg: err });
            return;
        }
        setStatus({ type: "sending", msg: "Sending..." });
        try {
            await new Promise((r) => setTimeout(r, 900));
            setStatus({ type: "sent", msg: "Thanks — your message has been sent!" });
            setForm({ firstName: "", lastName: "", email: "", message: "" });
        } catch (e) {
            setStatus({
                type: "error",
                msg: "Something went wrong. Please try again.",
            });
        }
    }

    // Animation settings
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.5 },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-[#031030] flex flex-col items-center justify-center p-6">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center"
            >
                Contact Me
            </motion.h1>

            {/* Card with staggered content */}
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
                            Have a project, question or just want to say hi? Fill the form — I
                            usually reply within 24 hours.
                        </p>
                    </div>

                    {/* Email */}
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

                    {/* Phone */}
                    <motion.div variants={item} className="flex items-start gap-2 mt-3">
                        <div className="p-3 rounded-xl bg-gray-200">
                            <FaPhone className="w-6 h-6 text-slate-700 " />
                        </div>
                        <div>
                            <p className="text-sm text-gray-200">Phone</p>
                            <p className="font-medium text-gray-400">0321-1130889</p>
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={item} className="mt-10">
                        <p className="text-xs text-slate-500">Follow</p>
                        <div className="flex gap-4 mt-3 text-2xl">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FaTwitter className="text-sky-500 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdul-ghani-6ab853388/" target="_blank" rel="noreferrer">
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

                {/* Form side */}
                <motion.div variants={item} className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="relative block">
                                <input
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="peer w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
                                />
                                <span
                                    className={`absolute left-4 text-slate-500 text-sm transition-all
                    peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-sky-500
                    ${form.firstName ? "-top-0 text-xs text-sky-500" : ""}`}
                                >
                                    First name
                                </span>
                            </label>

                            <label className="relative block">
                                <input
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="peer w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
                                />
                                <span
                                    className={`absolute left-4 text-slate-500 text-sm transition-all
                    peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-sky-500
                    ${form.lastName ? "-top-0 text-xs text-sky-500" : ""}`}
                                >
                                    Last name
                                </span>
                            </label>
                        </div>

                        <label className="relative block">
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="peer w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
                            />
                            <span
                                className={`absolute left-4 text-slate-500 text-sm transition-all
                  peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-sky-500
                  ${form.email ? "-top-0 text-xs text-sky-500" : ""}`}
                            >
                                Email address
                            </span>
                        </label>

                        <label className="relative block">
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                                required
                                placeholder=" "
                                className="peer w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
                            />
                            <span
                                className={`absolute left-4 text-slate-500 text-sm transition-all
                  peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-sky-500
                  ${form.message ? "-top-0 text-xs text-sky-500" : ""}`}
                            >
                                Your message
                            </span>
                        </label>

                        <div className="flex items-center justify-between gap-4">
                            <div className="text-sm text-slate-500">
                                {status?.type === "error" ? status.msg : status?.msg}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="inline-flex items-center gap-3 rounded-xl bg-sky-500 px-5 py-3 text-white font-semibold shadow-lg hover:bg-sky-600 transition-colors"
                            >
                                <FaPaperPlane className="w-4 h-4" />
                                <span>
                                    {status?.type === "sending" ? "Sending..." : "Send message"}
                                </span>
                            </motion.button>
                        </div>
                        <p className="text-xs text-slate-400">
                            By sending you agree to our <a className="underline">terms</a> and{" "}
                            <a className="underline">privacy policy</a>.
                        </p>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}
