import { useState } from 'react';

export const useSwapWords = () => {
    const [isSwapped, setIsSwapped] = useState(false);

    // Тоггл смены местами английского и русского слов
    const toggleSwap = () => {
        setIsSwapped(!isSwapped);
    };

    return {
        isSwapped,
        toggleSwap,
    };
};