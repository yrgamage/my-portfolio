"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 relative"
            style={{ background: "rgba(13,13,13,0.6)" }}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-black text-gradient mb-4"
                    >
                        Experience
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{
                                y: -6,
                                boxShadow:
                                    "0 0 30px rgba(245,197,24,0.2), 0 20px 40px rgba(0,0,0,0.5)",
                            }}
                            className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default"
                            style={{
                                background: "rgba(17,17,17,0.95)",
                                border: "1px solid rgba(245,197,24,0.12)",
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                                    style={{
                                        background: "rgba(245,197,24,0.1)",
                                        border: "1px solid rgba(245,197,24,0.2)",
                                    }}
                                >
                                    {exp.logo}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg leading-tight">
                                        {exp.role}
                                    </h3>
                                    <p className="text-yellow-400 font-semibold text-sm mt-0.5">
                                        {exp.company}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 mt-1">
                                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Calendar size={10} />
                                            {exp.duration}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                                            <MapPin size={10} />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                {exp.description}
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.tech.map((t) => (
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
