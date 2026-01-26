"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaBuilding, FaChevronRight } from "react-icons/fa";
import { experiences } from "@/lib/data";
import styles from "./Projects.module.css";

// Extract projects from experiences
const projects = experiences.flatMap((exp) => {
    if (exp.projects) {
        return exp.projects.map((project) => ({
            ...project,
            company: exp.company,
            role: exp.role,
            technologies: exp.technologies,
        }));
    }
    if (exp.project) {
        return [{
            name: exp.project,
            client: exp.client || "",
            highlights: exp.highlights || [],
            company: exp.company,
            role: exp.role,
            technologies: exp.technologies,
        }];
    }
    return [];
});

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        Real-world solutions I&apos;ve built for clients across healthcare,
                        fintech, and enterprise domains
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.slice(0, 6).map((project, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${expandedIndex === index ? styles.expanded : ""}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.projectIcon}>
                                    <FaBuilding />
                                </div>
                                <div className={styles.projectInfo}>
                                    <h3 className={styles.projectName}>{project.name}</h3>
                                    <span className={styles.client}>
                                        <FaExternalLinkAlt /> {project.client}
                                    </span>
                                </div>
                                <motion.div
                                    className={styles.expandIcon}
                                    animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                                >
                                    <FaChevronRight />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        className={styles.cardBody}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul className={styles.highlights}>
                                            {project.highlights.slice(0, 4).map((highlight, hIdx) => (
                                                <li key={hIdx}>{highlight}</li>
                                            ))}
                                        </ul>

                                        <div className={styles.techStack}>
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className={styles.techTag}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className={styles.company}>
                                {project.company}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
