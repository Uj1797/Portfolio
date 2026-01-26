"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Animated Gradient Background */}
            <div className={styles.backgroundGlow} />

            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.badge}>
                        Available for new opportunities
                    </span>
                    <h1 className={styles.name}>
                        {personalInfo.name}
                    </h1>
                    <h2 className={styles.title}>
                        {personalInfo.title}
                    </h2>
                    <p className={styles.tagline}>
                        {personalInfo.tagline}
                    </p>

                    <div className={styles.actions}>
                        <motion.a
                            href="#experience"
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Experience
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>
                    </div>

                    <div className={styles.socials}>
                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, color: "#fff" }}
                        >
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, color: "#fff" }}
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
}
