"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Linkedin,
    Github,
    Send,
    CheckCircle,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
    {
        icon: <Mail size={18} />,
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: <Phone size={18} />,
        label: "Phone",
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
    },
    {
        icon: <Linkedin size={18} />,
        label: "LinkedIn",
        value: "linkedin.com/in/alexjohnson",
        href: personalInfo.linkedin,
    },
    {
        icon: <Github size={18} />,
        label: "GitHub",
        value: "github.com/alexjohnson",
        href: personalInfo.github,
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="py-24 relative"
            style={{ background: "rgba(13,13,13,0.6)" }}
        >
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 70%, rgba(245,197,24,1) 0%, transparent 60%)",
                }}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-black text-gradient mb-4"
                    >
                        Contact
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 w-24 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #f5c518, #fbbf24)" }}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 mt-4"
                    >
                        Let&apos;s work together — I&apos;d love to hear from you
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">
                            Get in Touch
                        </h3>
                        {contactLinks.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group cursor-pointer"
                                style={{
                                    background: "rgba(17,17,17,0.95)",
                                    border: "1px solid rgba(245,197,24,0.15)",
                                }}
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-200"
                                    style={{ background: "rgba(245,197,24,0.1)" }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">{item.label}</p>
                                    <p className="text-white text-sm font-medium">{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl p-6 sm:p-8"
                        style={{
                            background: "rgba(17,17,17,0.95)",
                            border: "1px solid rgba(245,197,24,0.2)",
                        }}
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center h-full gap-4 py-10"
                            >
                                <CheckCircle size={56} className="text-green-400" />
                                <h3 className="text-xl font-bold text-white">
                                    Message Sent!
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Thanks for reaching out. I&apos;ll get back to you within 24
                                    hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Send a Message
                                </h3>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-2"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.border = "1px solid rgba(245,197,24,0.5)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.border = "1px solid rgba(245,197,24,0.5)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.border = "1px solid rgba(245,197,24,0.5)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                                        }}
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: loading ? 1 : 1.02 }}
                                    whileTap={{ scale: loading ? 1 : 0.97 }}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black transition-all duration-200 disabled:opacity-70"
                                    style={{
                                        background: loading
                                            ? "rgba(245,197,24,0.5)"
                                            : "linear-gradient(135deg, #f5c518, #fbbf24)",
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
