import { useState, useEffect } from "react";

export const useRectangleLogic = (isVisible: boolean, toggleVisibility: () => void) => {
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        if (isVisible) {
            const handleMouseMovement = (event: MouseEvent) => {
                setCursorPosition({
                    x: event.clientX - 250,
                    y: event.clientY - 30
                });
            };

            window.addEventListener('mousemove', handleMouseMovement);

            return () => {
                window.removeEventListener('mousemove', handleMouseMovement);
            };
        }
    }, [isVisible]);

    useEffect(() => {
        const handleClick = () => {
            if (isVisible) {
                toggleVisibility();
            }
        };

        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isVisible, toggleVisibility]);

    return { cursorPosition };
};
