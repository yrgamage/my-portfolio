"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor } from "lucide-react";
import { projects } from "@/data/portfolio";

const projectColors = [
    "rgba(245,197,24,0.15)",
    "rgba(139,92,246,0.15)",
    "rgba(34,197,94,0.15)",
    "rgba(239,68,68,0.15)",
    "rgba(59,130,246,0.15)",
    "rgba(249,115,22,0.15)",
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 70% 50%, rgba(245,197,24,1) 0%, transparent 60%)",
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
                        Projects
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 w-24 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #f5c518, #fbbf24)" }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -6,
                                scale: 1.02,
                                boxShadow:
                                    "0 0 30px rgba(245,197,24,0.2), 0 20px 40px rgba(0,0,0,0.5)",
                            }}
                            className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
                            style={{
                                background: "rgba(17,17,17,0.95)",
                                border: "1px solid rgba(245,197,24,0.12)",
                            }}
                        >
                            {/* Project Preview */}
                            <div
                                className="relative h-48 flex items-center justify-center overflow-hidden"
                                style={{ background: projectColors[i % projectColors.length] }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Monitor size={64} className="text-white opacity-10" />
                                </div>
                                <div className="relative z-10 text-center px-6">
                                    <div className="text-4xl mb-2">
                                        {["🤖", "📋", "💰", "🌿", "🏥", "📚"][i % 6]}
                                    </div>
                                    <p className="text-white/60 text-xs font-medium">
                                        {project.title.split("—")[0].trim()}
                                    </p>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Link
                                        href={project.demo}
                                        className="p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={18} />
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={18} />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <h3 className="font-bold text-white text-base leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tech */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 rounded-md text-xs font-medium"
                                            style={{
                                                background: "rgba(245,197,24,0.08)",
                                                border: "1px solid rgba(245,197,24,0.2)",
                                                color: "#f5c518",
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 py-0.5 rounded-md text-xs font-medium text-gray-500">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 pt-1">
                                    <Link
                                        href={project.demo}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-black transition-all duration-200 hover:opacity-90"
                                        style={{
                                            background: "linear-gradient(135deg, #f5c518, #fbbf24)",
                                        }}
                                    >
                                        <ExternalLink size={12} />
                                        Live Demo
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-gray-300 transition-all duration-200 hover:text-white hover:border-yellow-400/40"
                                        style={{
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            background: "rgba(255,255,255,0.03)",
                                        }}
                                    >
                                        <Github size={12} />
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
