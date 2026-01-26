"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiPython,
    SiNodedotjs,
    SiPostman,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiJupyter,
    SiOpenai,
    SiMeta,
    SiStreamlit,
    SiApache,
    SiTableau,
    SiGit,
    SiDocker,
    SiLinux,
} from "react-icons/si";
import { FaAws, FaChartBar, FaFileExcel, FaLink } from "react-icons/fa";
import { skillCategories as tetrisBlocks } from "@/lib/data";
import styles from "./TetrisSkills.module.css";

// Map icon names to actual icon components
const iconMap: { [key: string]: React.ElementType } = {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiPython,
    SiNodedotjs,
    SiPostman,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiJupyter,
    SiOpenai,
    SiMeta,
    SiStreamlit,
    SiApache,
    SiTableau,
    SiGit,
    SiDocker,
    SiLinux,
    FaAws,
    FaChartBar,
    FaFileExcel,
    FaLink,
};

// Tetris block shapes (relative cell positions)
const blockShapes: { [key: string]: number[][] } = {
    I: [[0, 0], [1, 0], [2, 0], [3, 0]],
    O: [[0, 0], [1, 0], [0, 1], [1, 1]],
    T: [[0, 0], [1, 0], [2, 0], [1, 1]],
    S: [[1, 0], [2, 0], [0, 1], [1, 1]],
    Z: [[0, 0], [1, 0], [1, 1], [2, 1]],
    L: [[0, 0], [0, 1], [0, 2], [1, 2]],
    J: [[1, 0], [1, 1], [1, 2], [0, 2]],
};

interface TetrisBlockProps {
    block: typeof tetrisBlocks[0];
    index: number;
    isAnimating: boolean;
}

function TetrisBlock({ block, index, isAnimating }: TetrisBlockProps) {
    const shape = blockShapes[block.shape];
    const cellSize = 60;

    // Calculate block dimensions based on shape
    const maxX = Math.max(...shape.map(([x]) => x)) + 1;
    const maxY = Math.max(...shape.map(([, y]) => y)) + 1;

    // Calculate landing position on the grid
    const column = index % 4;
    const row = Math.floor(index / 4);
    const landingX = column * (maxX * cellSize + 20);
    const landingY = row * (maxY * cellSize + 20);

    return (
        <motion.div
            className={styles.tetrisBlock}
            style={{
                width: maxX * cellSize,
                height: maxY * cellSize,
            }}
            initial={{
                y: -300 - (index * 50),
                x: landingX,
                opacity: 0,
                rotate: -15 + Math.random() * 30,
            }}
            animate={isAnimating ? {
                y: landingY,
                x: landingX,
                opacity: 1,
                rotate: 0,
            } : {}}
            transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: index * 0.2,
                duration: 0.8,
            }}
        >
            <div className={styles.blockLabel} style={{ color: block.color }}>
                {block.name}
            </div>

            {shape.map(([x, y], cellIndex) => {
                const skill = block.skills[cellIndex];
                const IconComponent = skill ? iconMap[skill.icon] : null;

                return (
                    <motion.div
                        key={cellIndex}
                        className={styles.cell}
                        style={{
                            left: x * cellSize,
                            top: y * cellSize,
                            width: cellSize,
                            height: cellSize,
                            background: `linear-gradient(135deg, ${block.color}22, ${block.color}11)`,
                            borderColor: block.color,
                            boxShadow: `inset 0 0 20px ${block.color}15, 0 0 15px ${block.color}20`,
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: `inset 0 0 30px ${block.color}30, 0 0 25px ${block.color}40`,
                            zIndex: 10,
                        }}
                    >
                        {IconComponent && skill && (
                            <div className={styles.skillIcon}>
                                <IconComponent
                                    size={28}
                                    color={block.color}
                                    className={styles.icon}
                                />
                                <span
                                    className={styles.tooltip}
                                    style={{
                                        background: block.color,
                                        color: '#0a0f1c',
                                    }}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

export default function TetrisSkills() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    return (
        <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
            <div className={styles.gridBackground} />

            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Watch the blocks fall and assemble! Hover over each cell to see the skill name.
                    </p>
                </motion.div>

                <div className={styles.tetrisContainer}>
                    <div className={styles.tetrisGrid}>
                        {tetrisBlocks.map((block, index) => (
                            <TetrisBlock
                                key={block.id}
                                block={block}
                                index={index}
                                isAnimating={hasAnimated}
                            />
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <motion.div
                    className={styles.legend}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                >
                    {tetrisBlocks.map((block) => (
                        <div
                            key={block.id}
                            className={styles.legendItem}
                            style={{ borderColor: block.color }}
                        >
                            <span
                                className={styles.legendColor}
                                style={{ background: block.color }}
                            />
                            <span className={styles.legendLabel}>{block.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
