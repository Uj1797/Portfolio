"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";

import { experiences } from "@/lib/data";
import { useState } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
    const [expandedId, setExpandedId] = useState<number | null>(1);

    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Professional Journey</h2>
                    <p className="section-subtitle">A timeline of my growth and contributions.</p>
                </motion.div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`${styles.item} ${expandedId === exp.id ? styles.active : ""}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.dot} />
                            <div
                                className={`${styles.card} glass glass-hover`}
                                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.roleInfo}>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <h4 className={styles.company}>{exp.company}</h4>
                                    </div>
                                    <div className={styles.meta}>
                                        <span><FaCalendarAlt /> {exp.period}</span>
                                        <span><FaMapMarkerAlt /> {exp.location}</span>
                                    </div>
                                    <div className={styles.toggle}>
                                        {expandedId === exp.id ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>

                                {expandedId === exp.id && (
                                    <motion.div
                                        className={styles.details}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                    >
                                        <ul className={styles.highlights}>
                                            {exp.highlights?.map((h, i) => (
                                                <li key={i}>{h}</li>
                                            ))}
                                        </ul>
                                        <div className={styles.techStack}>
                                            {exp.technologies.map(tech => (
                                                <span key={tech} className={styles.tech}>{tech}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
