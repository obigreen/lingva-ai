import { useState, useEffect } from 'react';

export const useWordTest = (questions: { eng: string; rus: string }[]) => {
    const [isSingleWordMode, setIsSingleWordMode] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    // Тоггл режима просмотра одного слова
    const toggleMode = () => {
        setIsSingleWordMode(!isSingleWordMode);
        setIsCorrect(false);
        setInputValue('');
    };

    // Функция перехода к следующему слову
    const handleNextWord = () => {
        setIsCorrect(false);
        setInputValue('');
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    // Функция проверки перевода (упрощенная для вывода правильного слова)
    const handleCheckTranslation = () => {
        setIsCorrect(true);
    };

    // Обработка нажатия клавиши Enter
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                if (!isCorrect) {
                    handleCheckTranslation();
                } else {
                    handleNextWord();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [inputValue, currentWordIndex, isCorrect]);

    const currentWord = questions[currentWordIndex];

    return {
        isSingleWordMode,
        toggleMode,
        currentWord,
        inputValue,
        setInputValue,
        isCorrect,
        handleNextWord,
        handleCheckTranslation,
    };
};




