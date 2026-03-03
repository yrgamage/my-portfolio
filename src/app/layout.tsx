import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Alex Johnson — Full-Stack Developer",
    description:
        "Personal portfolio of Alex Johnson, a Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    keywords: [
        "Alex Johnson",
        "Full-Stack Developer",
        "React",
        "Next.js",
        "TypeScript",
        "Portfolio",
        "Web Developer",
    ],
    authors: [{ name: "Alex Johnson" }],
    creator: "Alex Johnson",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://alexjohnson.dev",
        title: "Alex Johnson — Full-Stack Developer",
        description:
            "Personal portfolio of Alex Johnson, a Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
        siteName: "Alex Johnson Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alex Johnson — Full-Stack Developer",
        description:
            "Personal portfolio of Alex Johnson, Full-Stack Developer & UI Enthusiast.",
        creator: "@alexjohnson",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
