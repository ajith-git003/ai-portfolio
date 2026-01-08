import React from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Brain } from 'lucide-react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Brain size={32} />
                    </div>
                    <span className={styles.logoText}>AI Engineer</span>
                </div>
                <div className={styles.links}>
                    <a href="#hero">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
