"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheck,
} from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import styles from "./Contact.module.css";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.infoTitle}>Let&apos;s Connect</h3>
                        <p className={styles.infoText}>
                            I&apos;m always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision.
                        </p>

                        <div className={styles.contactItems}>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className={styles.contactItem}
                            >
                                <div className={styles.itemIcon}>
                                    <FaEnvelope />
                                </div>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemLabel}>Email</span>
                                    <span className={styles.itemValue}>{personalInfo.email}</span>
                                </div>
                            </a>

                            <div className={styles.contactItem}>
                                <div className={styles.itemIcon}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemLabel}>Location</span>
                                    <span className={styles.itemValue}>{personalInfo.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <motion.a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="Your name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                className={styles.textarea}
                                placeholder="Tell me about your project..."
                                rows={5}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting || isSubmitted}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <span className={styles.loading}>Sending...</span>
                            ) : isSubmitted ? (
                                <>
                                    <FaCheck /> Message Sent!
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane /> Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                className={styles.footer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <p>
                    © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & ♥
                </p>
            </motion.footer>
        </section>
    );
}
