"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socials = [
    { icon: <Github size={18} />, href: personalInfo.github, label: "GitHub" },
    { icon: <Linkedin size={18} />, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
    return (
        <footer
            className="py-10 border-t"
            style={{
                background: "rgba(5,5,5,0.95)",
                borderColor: "rgba(245,197,24,0.1)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Name & tagline */}
                    <div className="text-center md:text-left">
                        <span className="text-gradient font-black text-lg">
                            Alex Johnson
                        </span>
                        <p className="text-gray-600 text-xs mt-0.5">
                            Full-Stack Developer &amp; UI Enthusiast
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <motion.div key={s.label} whileHover={{ y: -3, scale: 1.1 }}>
                                <Link
                                    href={s.href}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 transition-all duration-200 hover:text-yellow-400 hover:bg-yellow-400/10"
                                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                                >
                                    {s.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs text-center md:text-right flex items-center gap-1">
                        <span>© 2026 Alex Johnson. Built with</span>
                        <Heart size={11} className="text-yellow-400 fill-yellow-400" />
                        <span>and</span>
                        <Code2 size={11} className="text-yellow-400" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
