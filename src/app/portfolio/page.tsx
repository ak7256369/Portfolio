"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PortfolioPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    // Carousel Logic
    const ezzstarImages = [
        "/ezzstar-screens/ezzstar1.png",
        "/ezzstar-screens/ezzstar2.png",
        "/ezzstar-screens/ezzstar3.png",
        "/ezzstar-screens/ezzstar4.png",
        "/ezzstar-screens/ezzstar5.png",
        "/ezzstar-screens/ezzstar6.png",
        "/ezzstar-screens/ezzstar7.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % ezzstarImages.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(timer);
    }, [ezzstarImages.length]);

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-16">
            <Link href="/">
                <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-gray-300">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
            </Link>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-6xl mx-auto space-y-12"
            >
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Selected Work
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        A showcase of my projects in Blockchain, Full Stack Development, and High-Performance Computing.
                    </p>
                </div>

                {/* Featured Project Section - Ezzstar */}
                <motion.div
                    variants={item}
                    className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 md:p-12"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                                ⭐ Featured Project
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                Ezzstar Presale Website
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                A flagship modern presale platform for a startup, featuring high-performance animations, complex state management, and seamless wallet integration. Designed to deliver an immersive/premium user experience.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Next.js", "Tailwind CSS", "Redux", "Node.js"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-black/40 border border-white/10 rounded-md text-sm text-gray-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Section */}
                        <div className="flex-1 w-full h-64 md:h-80 bg-black/50 rounded-xl border border-white/10 relative overflow-hidden group shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={ezzstarImages[currentImage]}
                                        alt={`Ezzstar Preview ${currentImage + 1}`}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.filter(p => p.title !== "Ezzstar Presale Website").map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative bg-white/5 rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                                        {project.category}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="text-sm text-gray-500 bg-black/40 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-center text-sm text-gray-300">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
