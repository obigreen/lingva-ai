import {useCallback, useEffect, useRef, useState} from "react";
import {DisplayStatus, DisplayStep, DisplayWord} from "../../display/DisplayController";
import {DisplayConfig} from "../../display/DisplaySettings";
import {shuffleArray} from "./useToggleArray";



export type UseDisplaySequenceResult = {
    status: DisplayStatus;
    currentWord: DisplayWord | null;
    currentStep: DisplayStep | null;
    start: () => void;
    stop: () => void;
};

/**
 * Хук управляет таймлайном автоматического показа слов
 * - source → target → следующее слово
 * - учитывает тайминги
 * - корректно чистит таймеры
 */

export const useDisplaySequence = (
    words: DisplayWord[],
    config: DisplayConfig
): UseDisplaySequenceResult => {
    const [status, setStatus] = useState<DisplayStatus>("idle");
    const [currentWord, setCurrentWord] = useState<DisplayWord | null>(null);
    const [currentStep, setCurrentStep] = useState<DisplayStep | null>(null);

    const indexRef = useRef(0);
    const timeoutRef = useRef<number | null>(null);
    const wordsRef = useRef<DisplayWord[]>(words);
    const runWordsRef = useRef<DisplayWord[]>(words);
    const configRef = useRef<DisplayConfig>(config);

    useEffect(() => {
        wordsRef.current = words;
    }, [words]);

    useEffect(() => {
        configRef.current = config;
    }, [config]);

    const clearTimer = useCallback(() => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    const stop = useCallback(() => {
        clearTimer();
        setStatus("stopped");
        setCurrentWord(null);
        setCurrentStep(null);
        indexRef.current = 0;
    }, [clearTimer]);

    const nextWord = useCallback(() => {
        const list = runWordsRef.current;

        if (list.length === 0) {
            stop();
            return;
        }

        if (indexRef.current >= list.length) {
            indexRef.current = 0;
        }

        setCurrentWord(list[indexRef.current]);
        setCurrentStep("source");

        indexRef.current += 1;
    }, [stop]);

    const start = useCallback(() => {
        if (wordsRef.current.length === 0) return;

        const baseWords = wordsRef.current;
        runWordsRef.current = configRef.current.random
            ? shuffleArray(baseWords)
            : baseWords;

        clearTimer();
        setStatus("running");
        indexRef.current = 0;
        nextWord();
    }, [clearTimer, nextWord]);

    useEffect(() => {
        if (status !== "running") return;
        if (!currentWord || !currentStep) return;

        const {showTarget, sourceDelay, targetDelay} = configRef.current;

        if (currentStep === "source") {
            timeoutRef.current = window.setTimeout(() => {
                if (showTarget) {
                    setCurrentStep("target");
                } else {
                    nextWord();
                }
            }, sourceDelay);
        }


        if (currentStep === "target") {
            timeoutRef.current = window.setTimeout(() => {
                nextWord();
            }, targetDelay);
        }

        return clearTimer;
    }, [
        status,
        currentWord,
        currentStep,
        clearTimer,
        nextWord
    ]);

    useEffect(() => {
        return () => {
            clearTimer();
        };
    }, [clearTimer]);

    return {
        status,
        currentWord,
        currentStep,
        start,
        stop
    };
};
