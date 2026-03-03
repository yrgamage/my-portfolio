"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import CVSection from "@/components/CVSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
            <Navbar />
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Certificates />
            <CVSection />
            <Contact />
            <Footer />
        </main>
    );
}
