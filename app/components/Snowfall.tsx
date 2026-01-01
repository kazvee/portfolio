'use client';
import { useEffect } from 'react';

const Snowfall = () => {
    useEffect(() => {
        const now = new Date();
        const month = now.getMonth() + 1;
        const date = now.getDate();

        const isSnowSeason =
            (month === 12 && date >= 15) ||
            (month === 1 && date <= 6);

        if (!isSnowSeason) return;

        const snowEmoji = "❄️";
        let timeoutId: number | null = null;

        const addEmoji = (e: MouseEvent) => {
            if (Math.random() > 0.2) return;
            if (timeoutId) return;

            const emoji = document.createElement('div');
            emoji.classList.add('snowflake');
            emoji.textContent = snowEmoji;

            const maxWidth = window.innerWidth * 0.9;
            const offsetX = Math.random() * maxWidth;
            emoji.style.left = `${offsetX}px`;

            emoji.style.top = `-${20 + Math.random() * 30}px`;

            const size = Math.random() * 2 + 1.5;
            emoji.style.fontSize = `${size}em`;

            document.body.appendChild(emoji);

            emoji.classList.add('fall');

            setTimeout(() => emoji.remove(), 10000);

            timeoutId = window.setTimeout(() => {
                timeoutId = null;
            }, 1000);
        };

        document.body.addEventListener('mousemove', addEmoji);

        return () => {
            document.body.removeEventListener('mousemove', addEmoji);

            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return null;
};

export default Snowfall;