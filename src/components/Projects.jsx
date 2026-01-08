import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { projects } from '../data/content';

const Projects = () => {
    return (
        <section id="projects" className={`section-padding ${styles.projects}`}>
            <div className="container">
                <h2 className="section-title text-gradient">Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
