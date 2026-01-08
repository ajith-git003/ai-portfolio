import React, { useEffect, useRef } from 'react';
import styles from './Background.module.css';
import { useTheme } from '../context/ThemeContext';

const Background = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor(w, h) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update(w, h) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw(ctx, color) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const drawLines = (p, ctx, color) => {
            for (let i = 0; i < particles.length; i++) {
                const dx = p.x - particles[i].x;
                const dy = p.y - particles[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = color;
                    ctx.globalAlpha = 1 - dist / 150; // Fade out with distance
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[i].x, particles[i].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = theme === 'dark';
            const particleColor = isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(0, 0, 0, 0.2)'; // Blue vs Gray
            const lineColor = isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(0, 0, 0, 0.05)';

            particles.forEach(p => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx, particleColor);
                drawLines(p, ctx, lineColor);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-init when theme changes

    return (
        <div className={styles.canvasContainer}>
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
};

export default Background;
