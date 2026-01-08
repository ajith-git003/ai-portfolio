import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            color: 'var(--accent-primary)',
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'var(--glass-bg)',
            borderRadius: '8px',
            border: '1px solid var(--glass-border)'
        }}>
            {time.toLocaleTimeString()}
        </div>
    );
};

export default RealTimeClock;
