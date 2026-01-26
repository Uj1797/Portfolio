"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaChartLine, FaRobot } from "react-icons/fa";
import styles from "./About.module.css";

const highlights = [
    {
        icon: <FaCode />,
        title: "Full Stack Development",
        description: "Building scalable web applications with React, Frappe, and modern frameworks",
        color: "#00d4ff",
    },
    {
        icon: <FaDatabase />,
        title: "Database Engineering",
        description: "Designing and optimizing PostgreSQL databases, stored procedures, and data architecture",
        color: "#a855f7",
    },
    {
        icon: <FaChartLine />,
        title: "Data Analytics",
        description: "Creating insightful dashboards with Power BI, Apache Superset, and data visualization",
        color: "#00ff88",
    },
    {
        icon: <FaRobot />,
        title: "GenAI Integration",
        description: "Implementing LLM solutions with Langchain, OpenAI API, and Llama models",
        color: "#ff006e",
    },
];

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Passionate about transforming complex data into actionable insights and building elegant solutions
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.bio}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.bioCard}>
                            <p>
                                I&apos;m a <strong>Data Engineer and Full Stack Developer</strong> with a passion for building
                                scalable solutions that bridge the gap between complex data systems and intuitive user experiences.
                            </p>
                            <p>
                                Currently working at <strong>BytePanda Technologies</strong> as a Software Development Engineer,
                                where I lead the development of pharmaceutical research platforms using Frappe and React.
                            </p>
                            <p>
                                My expertise spans across database architecture, performance optimization, and creating
                                data-driven applications. I&apos;ve delivered <strong>38+ change requests</strong> in a single quarter
                                and achieved a <strong>5.81% reduction</strong> in production costs through ML-powered solutions.
                            </p>
                            <p>
                                I thrive on solving challenging problems and continuously expanding my knowledge in
                                emerging technologies like Generative AI and modern web frameworks.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.highlights}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className={styles.highlightCard}
                                style={{ "--accent-color": item.color } as React.CSSProperties}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
