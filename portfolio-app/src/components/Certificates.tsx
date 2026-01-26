"use client";

import { motion } from "framer-motion";
import {
    FaAws,
    FaGoogle,
    FaMicrosoft,
    FaMeta,
} from "react-icons/fa6";
import { FaCertificate, FaBuilding } from "react-icons/fa";
import { certificates } from "@/lib/data";
import styles from "./Certificates.module.css";

const issuerIcons: { [key: string]: React.ElementType } = {
    IBM: FaBuilding,
    Microsoft: FaMicrosoft,
    Meta: FaMeta,
    Amazon: FaAws,
    Google: FaGoogle,
    Macquarie: FaBuilding,
    Tata: FaBuilding,
};

export default function Certificates() {
    return (
        <section id="certificates" className={`section ${styles.certificates}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Professional certifications validating my expertise across data science,
                        cloud, and development
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {certificates.map((cert, index) => {
                        const IconComponent = issuerIcons[cert.issuer] || FaCertificate;

                        return (
                            <motion.div
                                key={index}
                                className={styles.card}
                                style={{ "--cert-color": cert.color } as React.CSSProperties}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className={styles.cardInner}>
                                    <div className={styles.iconWrapper}>
                                        <IconComponent />
                                    </div>

                                    <div className={styles.content}>
                                        <h3 className={styles.certName}>{cert.name}</h3>
                                        <span className={styles.issuer}>{cert.issuer}</span>
                                    </div>

                                    <div className={styles.badge}>
                                        <FaCertificate />
                                    </div>
                                </div>

                                <div className={styles.glowEffect} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
