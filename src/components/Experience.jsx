import React from 'react';
import styles from './Experience.module.css';
import { experience } from '../data/content';

const Experience = () => {
    return (
        <section id="experience" className={`section-padding ${styles.experience}`}>
            <div className="container">
                <h2 className="section-title text-gradient">Work History</h2>

                <div className={styles.timeline}>
                    {experience.map((job, index) => (
                        <div key={index} className={styles.jobItem}>
                            <div className={styles.dot}></div>
                            <div className={styles.content}>
                                <div className={styles.period}>{job.period}</div>
                                <h3 className={styles.role}>{job.role}</h3>
                                <h4 className={styles.company}>{job.company}</h4>
                                <p className={styles.description}>{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
