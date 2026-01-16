import React, {useMemo} from "react";
import {useDisplaySequence} from "../en-components/logics/useDisplaySequence";
import {DisplayConfig, DisplaySettings} from "./DisplaySettings";
import {DisplayOverlay} from "./DisplayOverlay";

export type DisplayWord = {
    source: string;
    target: string;
};

export type DisplayMode = "settings" | "running";
export type DisplayStep = "source" | "target";
export type DisplayStatus = "idle" | "running" | "stopped";

type DisplayControllerProps = {
    words: DisplayWord[];
    mode: DisplayMode;
    config: DisplayConfig;
    onConfigChange: (config: DisplayConfig) => void;
    onStart: () => void;
    onBackToSettings: () => void;
    onExit: () => void;
};

export const DisplayController = (
    {words, mode, config, onConfigChange, onExit, onStart, onBackToSettings}: DisplayControllerProps) => {

    const {
        status,
        currentWord,
        currentStep,
        start,
        stop
    } = useDisplaySequence(words, config);

    /**
     * Запуск режима показа
     */
    const handleStart = () => {
        start();
        onStart();
    };

    const handleCloseOverlay = () => {
        stop();
        onBackToSettings(); // 🔥 C → B
    };

    /**
     * Выход из overlay
     */
    const handleStop = () => {
        stop();
        onExit();
    };

    /**
     * Memo для оптимизации, чтобы не дёргать overlay без нужды
     */
    const overlayData = useMemo(() => {
        return {
            word: currentWord,
            step: currentStep,
            status
        };
    }, [currentWord, currentStep, status]);

    if (mode === "settings") {
        return (
            <DisplaySettings
                config={config}
                onChange={onConfigChange}
                onStart={handleStart}
                onBack={onExit} // B → A
            />
        );
    }

    if (mode === "running") {
        return (
            <DisplayOverlay
                data={overlayData}
                onClose={handleCloseOverlay} // C → B
            />
        );
    }

    return null;
};
