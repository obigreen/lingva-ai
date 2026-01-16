import React from "react";
import styled from "styled-components";
import {DisplayStatus, DisplayStep, DisplayWord} from "./DisplayController";

type OverlayData = {
    word: DisplayWord | null;
    step: DisplayStep | null;
    status: DisplayStatus;
};

type DisplayOverlayProps = {
    data: OverlayData;
    onClose: () => void;
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

    return (
        <Backdrop onClick={onClose}>
            <Content onClick={(e) => e.stopPropagation()}>
                <Word>
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
    background: rgba(0, 0, 0, 0.75);
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    width: 70%;
    max-width: 1200px;
    padding: 40px;
    text-align: center;
`;

const Word = styled.div`
    color: #ffffff;
    font-weight: 600;
    line-height: 1.2;

    /* База под “резиновый” текст */
    font-size: clamp(32px, 6vw, 120px);

    user-select: none;
`;
