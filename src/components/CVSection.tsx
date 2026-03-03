"use client";

import { motion } from "framer-motion";
import { Download, FileText, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function CVSection() {
    return (
        <section id="cv" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(245,197,24,0.6) 0%, transparent 70%)",
                }}
            />
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                        }}
                        className="absolute w-1 h-1 rounded-full bg-yellow-400"
                        style={{
                            left: `${8 + i * 7.5}%`,
                            top: `${20 + (i % 3) * 30}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                        style={{
                            background: "rgba(245,197,24,0.1)",
                            border: "1px solid rgba(245,197,24,0.3)",
                            color: "#f5c518",
                        }}
                    >
                        <Sparkles size={14} />
                        Available for opportunities
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black mb-4">
                        <span className="text-white">Want to know </span>
                        <span className="text-gradient">more about me?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                        Download my CV to learn about my full experience, education, skills,
                        and achievements in detail.
                    </p>

                    {/* CV Card */}
                    <div
                        className="inline-block rounded-2xl p-6 mb-8"
                        style={{
                            background: "rgba(17,17,17,0.95)",
                            border: "1px solid rgba(245,197,24,0.2)",
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                style={{
                                    background: "rgba(245,197,24,0.15)",
                                    border: "1px solid rgba(245,197,24,0.3)",
                                }}
                            >
                                <FileText size={24} className="text-yellow-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">Alex_Johnson_CV.pdf</p>
                                <p className="text-gray-500 text-sm">
                                    2 pages · Updated Feb 2026
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="flex justify-center">
                        <motion.a
                            href={personalInfo.cvUrl}
                            download
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 0 50px rgba(245,197,24,0.5), 0 15px 40px rgba(245,197,24,0.2)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-black text-lg transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, #f5c518 0%, #fbbf24 50%, #ffe066 100%)",
                            }}
                        >
                            <Download size={22} />
                            Download My CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
