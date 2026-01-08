import React from 'react';
import styles from './Skills.module.css';
import { skills } from '../data/content';

const Skills = () => {
    return (
        <section id="skills" className={`section-padding ${styles.skills}`}>
            <div className="container">
                <h2 className="section-title text-gradient">Technical Arsenal</h2>

                <div className={styles.grid}>
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={24} />
                                </div>
                                <span className={styles.name}>{skill.name}</span>
                                <span className={styles.category}>{skill.category}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
