"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/portfolio";

const certBg = [
    "linear-gradient(135deg, rgba(245,197,24,0.2), rgba(251,191,36,0.05))",
    "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))",
    "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))",
    "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.05))",
    "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.05))",
    "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))",
];

const certEmoji = ["☁️", "🌐", "📱", "⚙️", "🧠", "🍃"];

export default function Certificates() {
    return (
        <section
            id="certificates"
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
                        Certificates
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
                        Professional certifications and achievements
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{
                                y: -4,
                                boxShadow:
                                    "0 0 25px rgba(245,197,24,0.15), 0 15px 30px rgba(0,0,0,0.5)",
                            }}
                            className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
                            style={{
                                background: "rgba(17,17,17,0.95)",
                                border: "1px solid rgba(245,197,24,0.12)",
                            }}
                        >
                            {/* Cert Image / Preview */}
                            <div
                                className="h-40 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
                                style={{ background: certBg[i % certBg.length] }}
                            >
                                <span className="text-5xl">{certEmoji[i % certEmoji.length]}</span>
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-12"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(17,17,17,0.95), transparent)",
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <div className="flex items-start gap-2">
                                    <Award size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-white text-sm leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-yellow-400 text-xs font-medium mt-0.5">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-gray-500 text-xs">{cert.year}</p>
                                    </div>
                                </div>

                                <Link
                                    href={cert.link}
                                    className="inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90 mt-auto"
                                    style={{
                                        background: "rgba(245,197,24,0.1)",
                                        border: "1px solid rgba(245,197,24,0.3)",
                                        color: "#f5c518",
                                    }}
                                >
                                    <ExternalLink size={12} />
                                    View Certificate
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
