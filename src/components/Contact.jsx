import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import styles from './Contact.module.css';
import { profile } from '../data/content';
import RealTimeClock from './RealTimeClock';

const Contact = () => {
    return (
        <section id="contact" className={`section-padding ${styles.contact}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className="section-title text-gradient">Let's Connect</h2>
                    <p className={styles.text}>
                        I'm always open to discussing new projects, creative ideas, or opportunities in AI Engineering.
                    </p>

                    <div className={styles.methods}>
                        <a href={`mailto:${profile.email}`} className={styles.method}>
                            <Mail />
                            <span>{profile.email}</span>
                        </a>
                        <a href="tel:+918608004294" className={styles.method}>
                            <Phone />
                            <span>+91 86080 04294</span>
                        </a>
                        <div className={styles.socials}>
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <Linkedin size={24} />
                            </a>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <p>© {new Date().getFullYear()} {profile.name}.</p>
                        <RealTimeClock />
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
