"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/portfolio";

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-black text-gradient mb-4"
            >
                {children}
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
    );
}

export default function Education() {
    return (
        <section id="education" className="py-24 relative">
            {/* Subtle bg */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 50%, rgba(245,197,24,1) 0%, transparent 60%)",
                }}
            />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>Education</SectionTitle>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(245,197,24,0.5), rgba(245,197,24,0.1))",
                        }}
                    />

                    <div className="space-y-12">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative flex flex-col items-start gap-6"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-yellow-400 bg-black z-10 mt-6 md:mt-8">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 m-0.5" />
                                </div>

                                {/* Card */}
                                <div
                                    className="ml-14 md:ml-20 w-[calc(100%-3.5rem)] md:w-[calc(100%-5rem)] rounded-2xl p-6 card-hover cursor-default"
                                    style={{
                                        background: "rgba(17,17,17,0.95)",
                                        border: "1px solid rgba(245,197,24,0.15)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl">{edu.logo}</span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Calendar size={12} className="text-yellow-400" />
                                                <span className="text-yellow-400 text-xs font-semibold">
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-white text-lg leading-tight">
                                                {edu.institution}
                                            </h3>
                                            <div className="flex items-center gap-1.5 mt-1 mb-3">
                                                <GraduationCap size={14} className="text-yellow-400" />
                                                <span className="text-yellow-400 text-sm font-medium">
                                                    {edu.degree}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
