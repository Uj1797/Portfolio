"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { FaLink, FaTerminal } from "react-icons/fa";
import { skillCategories } from "@/lib/data";
import styles from "./Skills.module.css";

// Robust icon resolver
const getIcon = (name: string) => {
    return (SiIcons as any)[name] || (FaIcons as any)[name] || FaLink;
};

// Prominent icons for each category header
const CATEGORY_ICONS: Record<string, React.ElementType> = {
    frontend: SiIcons.SiReact,
    backend: SiIcons.SiPython,
    databases: SiIcons.SiPostgresql,
    datascience: SiIcons.SiPandas,
    genai: SiIcons.SiOpenai,
    analytics: FaIcons.FaChartBar,
    devops: SiIcons.SiDocker,
};

export default function Skills() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.categoryBadge}>Technical Portfolio</span>
                    <h2 className="section-title">The Technical Ecosystem</h2>
                    <p className="section-subtitle">
                        A comprehensive and thoughtfully organized map of my professional domains and expertise.
                    </p>
                </motion.div>

                <div className={styles.bentoGrid}>
                    {skillCategories.map((cat, i) => {
                        const CategoryIcon = CATEGORY_ICONS[cat.id] || FaTerminal;

                        // Bento spans for a precise 3-column layout
                        let gridClass = "";
                        if (i === 0) gridClass = styles.item2x2;       // Frontend (Big)
                        else if (i === 1) gridClass = styles.item1x2;  // Backend (Tall)
                        else if (i === 6) gridClass = styles.item2x1;  // DevOps (Wide)
                        else gridClass = styles.item1x1;               // Others (Databases, etc.)

                        return (
                            <motion.div
                                key={cat.id}
                                className={`${styles.card} ${gridClass}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                            >
                                <div
                                    className={styles.cardGlow}
                                    style={{ background: `radial-gradient(circle at 100% 0%, ${cat.color}10 0%, transparent 60%)` }}
                                />

                                <div className={styles.cardHeader}>
                                    <div className={styles.headerTop}>
                                        <div className={styles.iconBox} style={{ color: cat.color }}>
                                            <CategoryIcon size={22} />
                                        </div>
                                        <span className={styles.countBadge} style={{ color: cat.color, borderColor: `${cat.color}20` }}>
                                            {cat.skills.length} Tools
                                        </span>
                                    </div>
                                    <h3 className={styles.cardTitle}>{cat.name}</h3>
                                </div>

                                <div className={styles.skillsPool}>
                                    {cat.skills.map((skill) => {
                                        const SkillIcon = getIcon(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                className={styles.skillChip}
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                                style={{ '--chip-accent': cat.color } as any}
                                            >
                                                <SkillIcon size={14} color={cat.color} />
                                                <span className={styles.skillName}>{skill.name}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.progressTrack} style={{ backgroundColor: `${cat.color}10` }}>
                                        <motion.div
                                            className={styles.progressThumb}
                                            style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}40` }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
