import React from "react";
import styled from "styled-components";
import {DisplayStatus, DisplayStep, DisplayWord} from "./DisplayController";
import {fluidFont} from "../../styles/Common";

type OverlayData = {
    word: DisplayWord | null;
    step: DisplayStep | null;
    status: DisplayStatus;
};

type DisplayOverlayProps = {
    data: OverlayData;
    onClose: () => void;
};

const getDisplayScale = (value: string) => {
    const length = value.trim().length;

    if (length <= 12) return 1;
    if (length <= 24) return 0.86;
    if (length <= 42) return 0.72;

    return 0.62;
};

export const DisplayOverlay = ({ data, onClose }: DisplayOverlayProps) => {
    const { word, step, status } = data;

    if (status !== "running" || !word || !step) {
        return null;
    }

    const text =
        step === "source"
            ? word.source
            : word.target;
    const scale = getDisplayScale(text);

    return (
        <Backdrop onClick={onClose}>
            <Content>
                <Word $scale={scale}>
                    {text}
                </Word>
            </Content>
        </Backdrop>
    );
};

/* ================= styles ================= */

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.86);
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    width: min(95vw, 1200px);
    max-width: 1200px;
    padding: clamp(16px, 3vw, 40px);
    text-align: center;
`;

const Word = styled.div<{ $scale: number }>`
    color: #ffffff;
    font-weight: 600;
    line-height: 1.15;
    ${({$scale}) => fluidFont({minSize: 30 * $scale, maxSize: 140 * $scale})};
    overflow-wrap: anywhere;
    user-select: none;
`;
