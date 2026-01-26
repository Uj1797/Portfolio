"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
            <motion.div className={styles.progressBar} style={{ scaleX }} />

            <div className={`container ${styles.navContainer}`}>
                <a href="#" className={styles.logo}>
                    <span className={styles.us}>U</span>
                    <span className={styles.sharma}>S</span>
                    <span className={styles.dot} />
                </a>

                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className={styles.cta}>
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
}
