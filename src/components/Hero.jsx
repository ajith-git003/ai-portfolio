import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowRight, Play, Download } from 'lucide-react';
import { profile } from '../data/content';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.textArea}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.greeting}>Hello, I'm {profile.name}</h2>
                        <h1 className={`${styles.title} text-gradient`}>{profile.role}</h1>
                        <p className={styles.subtitle}>
                            {profile.summary}
                        </p>

                        <div className={styles.actions}>
                            <a href="#projects" className={styles.ctaPrimary}>
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className={styles.ctaSecondary}>
                                Contact Me
                            </a>
                            <a href="/Ajith%20Kumar%20-%20AI%20Engineer.pdf" download="Ajith_Kumar_Resume.pdf" className={styles.ctaSecondary}>
                                <Download size={20} /> Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.videoArea}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/Xmiuv0tgqP8?si=your_params&rel=0"
                            title="AI Portfolio Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className={styles.videoFrame}
                        ></iframe>
                    </div>
                </motion.div>
            </div>

            {/* Background decorations */}
            <div className={styles.glowOne}></div>
            <div className={styles.glowTwo}></div>
        </section>
    );
};

export default Hero;
