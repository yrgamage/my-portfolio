"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Code2, Layers, Cpu, Database, Globe, Zap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const skillIcons: Record<string, React.ReactNode> = {
    "React": <Code2 size={14} />,
    "Next.js": <Globe size={14} />,
    "TypeScript": <Layers size={14} />,
    "Node.js": <Zap size={14} />,
    "Python": <Cpu size={14} />,
    "PostgreSQL": <Database size={14} />,
};

export default function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.06, 0.12, 0.06],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(245,197,24,0.4) 0%, rgba(245,197,24,0) 70%)",
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.04, 0.08, 0.04],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)",
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(245,197,24,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.5) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative">
                            {/* Outer glow ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-3 rounded-full opacity-30"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, #f5c518, transparent, #fbbf24, transparent, #f5c518)",
                                }}
                            />
                            <div
                                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 glow-yellow"
                                style={{ borderColor: "rgba(245,197,24,0.4)" }}
                            >
                                <Image
                                    src="/profile.png"
                                    alt="Alex Johnson"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                                    priority
                                />
                            </div>
                            {/* Status badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                                style={{
                                    background: "rgba(5,5,5,0.9)",
                                    border: "1px solid rgba(245,197,24,0.4)",
                                }}
                            >
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-yellow-400">Open to Work</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                            style={{
                                background: "rgba(245,197,24,0.1)",
                                border: "1px solid rgba(245,197,24,0.3)",
                                color: "#f5c518",
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            About Me
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-gradient">{personalInfo.name}</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg text-gray-400 font-medium"
                        >
                            {personalInfo.title}
                        </motion.p>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-gray-400 leading-relaxed"
                        >
                            {personalInfo.bio}
                        </motion.p>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-2"
                        >
                            {personalInfo.skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 + i * 0.05 }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold cursor-default"
                                    style={{
                                        background: "rgba(245,197,24,0.12)",
                                        border: "1px solid rgba(245,197,24,0.3)",
                                        color: "#f5c518",
                                    }}
                                >
                                    {skillIcons[skill] || <Zap size={14} />}
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-3 pt-2"
                        >
                            <motion.a
                                href={personalInfo.cvUrl}
                                download
                                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(245,197,24,0.4)" }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-black transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #f5c518, #fbbf24)",
                                }}
                            >
                                <Download size={18} />
                                Download CV
                            </motion.a>
                            <motion.button
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 text-yellow-400"
                                style={{
                                    border: "1px solid rgba(245,197,24,0.4)",
                                    background: "rgba(245,197,24,0.05)",
                                }}
                            >
                                Get In Touch
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
