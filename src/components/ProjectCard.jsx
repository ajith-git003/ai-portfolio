import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <ExternalLink size={20} />
                    </a>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                    {project.tech.map((tech, i) => (
                        <span key={i} className={styles.tag}>{tech}</span>
                    ))}
                </div>
            </div>

            <div className={styles.glow} />
        </motion.div>
    );
};

export default ProjectCard;
