"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-yellow-400/10" : ""
                }`}
            style={{
                background: scrolled
                    ? "rgba(5,5,5,0.92)"
                    : "rgba(5,5,5,0.7)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Profile */}
                    <motion.button
                        onClick={() => scrollTo("#about")}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-yellow-400/50 group-hover:ring-yellow-400 transition-all duration-300">
                            <Image
                                src="/profile.png"
                                alt="Alex Johnson"
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        </div>
                        <span
                            className="font-bold text-sm hidden sm:block text-gradient"
                            style={{ fontFamily: "Inter, sans-serif" }}
                        >
                            Alex Johnson
                        </span>
                    </motion.button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <motion.button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? "text-yellow-400 bg-yellow-400/10"
                                            : "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/5"
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-yellow-400/10"
                        style={{ background: "rgba(5,5,5,0.98)" }}
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <motion.button
                                        key={link.href}
                                        onClick={() => scrollTo(link.href)}
                                        whileTap={{ scale: 0.97 }}
                                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                                                ? "text-yellow-400 bg-yellow-400/10"
                                                : "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/5"
                                            }`}
                                    >
                                        {link.label}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
