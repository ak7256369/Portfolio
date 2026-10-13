"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

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
                className="max-w-4xl mx-auto space-y-12"
            >
                {/* Header */}
                <motion.div variants={item} className="space-y-4 border-b border-gray-800 pb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {resumeData.personalInfo.name}
                            </h1>
                            <p className="text-xl text-gray-400 mt-2">{resumeData.personalInfo.title}</p>
                        </div>
                        {/* Printable/Download Button Placeholder */}
                        {/* <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button> */}
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center hover:text-white transition-colors">
                            <Mail className="mr-2 h-4 w-4" /> {resumeData.personalInfo.email}
                        </a>
                        <a
                            href={`https://${resumeData.personalInfo.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-white transition-colors"
                        >
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn Profile
                        </a>
                    </div>

                    <p className="text-gray-300 leading-relaxed max-w-3xl">
                        {resumeData.personalInfo.summary}
                    </p>
                </motion.div>

                {/* Experience */}
                <motion.section variants={item} className="space-y-6">
                    <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">Experience</h2>
                    <div className="space-y-8">
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="relative pl-4 md:pl-0">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                    <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                                    <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
                                </div>
                                <div className="text-blue-400 mb-2">{exp.company}</div>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section variants={item} className="space-y-6">
                    <h2 className="text-2xl font-semibold border-l-4 border-purple-500 pl-4">Education</h2>
                    <div className="grid gap-6">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-white">{edu.institution}</h3>
                                        <div className="text-purple-400">{edu.degree}</div>
                                    </div>
                                    <span className="text-sm text-gray-400 font-mono">{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Skills */}
                <motion.section variants={item} className="space-y-6">
                    <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-4">Technical Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {resumeData.skills.technical.map((skill, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Leadership */}
                <motion.section variants={item} className="space-y-6">
                    <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-4">Leadership</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.leadership.map((lead, index) => (
                            <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/5">
                                <h3 className="text-lg font-medium text-white mb-1">{lead.role}</h3>
                                <div className="text-red-400 text-sm mb-3">{lead.organization}</div>
                                <p className="text-sm text-gray-400 mb-2 font-mono">{lead.period}</p>
                                <ul className="list-disc list-inside text-sm text-gray-300">
                                    {lead.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
}
