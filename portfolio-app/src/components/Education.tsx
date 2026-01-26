"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { education } from "@/lib/data";
import styles from "./Education.module.css";

export default function Education() {
    return (
        <section id="education" className={`section ${styles.education}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">
                        Academic foundation that powers my technical expertise
                    </p>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                >
                    <div className={styles.iconWrapper}>
                        <FaGraduationCap />
                    </div>

                    <div className={styles.content}>
                        <h3 className={styles.degree}>{education.degree}</h3>
                        <p className={styles.institution}>{education.institution}</p>

                        <div className={styles.details}>
                            <span className={styles.period}>{education.period}</span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.location}>
                                <FaMapMarkerAlt /> {education.location}
                            </span>
                        </div>

                        <div className={styles.cgpaWrapper}>
                            <div className={styles.cgpaBadge}>
                                <FaStar className={styles.starIcon} />
                                <span className={styles.cgpaValue}>{education.cgpa}</span>
                                <span className={styles.cgpaLabel}>CGPA</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.decoration}>
                        <div className={styles.decorCircle} />
                        <div className={styles.decorCircle} />
                        <div className={styles.decorCircle} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
