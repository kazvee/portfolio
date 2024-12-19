'use client';
import { useEffect } from 'react';

const Snowfall = () => {
    useEffect(() => {
        const SNOWFLAKE_ICON = '/images/snowflake-icon.png';
        const SNOW_EMOJI = '❄️';
        const FALL_DURATION = 10000;
        const DEBOUNCE_TIME = 1000; // min time between snowflakes in ms
        const SNOWFLAKE_PROBABILITY = 0.2;

        let lastSnowflakeTime = 0;

        const createSnowflakeElement = (
            size: string,
            offsetX: string
        ): HTMLElement => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = offsetX;
            snowflake.style.top = `-${20 + Math.random() * 30}px`;
            return snowflake;
        };

        const createSnowflakeImage = (size: string): HTMLImageElement => {
            const image = document.createElement('img');
            image.src = SNOWFLAKE_ICON;
            image.alt = 'Snowflake';
            image.classList.add('snowflake-icon');
            image.style.width = size;
            image.style.height = size;
            return image;
        };

        const addSnowflake = () => {
            const now = performance.now();
            if (
                Math.random() > SNOWFLAKE_PROBABILITY ||
                now - lastSnowflakeTime < DEBOUNCE_TIME
            )
                return;

            const randomSize = `${(Math.random() * 2 + 1.5).toFixed(2)}em`;
            const offsetX = `${Math.random() * window.innerWidth * 0.9}px`;

            const snowflake = createSnowflakeElement(randomSize, offsetX);
            const snowflakeImage = createSnowflakeImage(randomSize);

            snowflakeImage.onerror = () => {
                snowflake.textContent = SNOW_EMOJI;
                snowflake.style.fontSize = randomSize;
                snowflakeImage.remove();
            };

            snowflake.appendChild(snowflakeImage);
            document.body.appendChild(snowflake);

            snowflake.classList.add('fall');
            setTimeout(() => snowflake.remove(), FALL_DURATION);

            lastSnowflakeTime = now;
        };

        document.body.addEventListener('mousemove', addSnowflake);

        return () => {
            document.body.removeEventListener('mousemove', addSnowflake);
        };
    }, []);

    return null;
};

export default Snowfall;