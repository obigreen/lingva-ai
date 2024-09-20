import React from "react";
import { useRectangleLogic } from "../../en-components/logics/useWrapper";
import { S } from './Wrapper_Styles'

interface WrapperProps {
    isVisible: boolean;
    toggleVisibility: () => void;
}

export const Wrapper = ({ isVisible, toggleVisibility }: WrapperProps) => {
    const { cursorPosition } = useRectangleLogic(isVisible, toggleVisibility); // Используем логику

    return isVisible ? (
        <S.Rectangle
            style={{
                left: cursorPosition.x,
                top: cursorPosition.y,
                height: `calc(100vh - ${cursorPosition.y}px)`
            }}
        />
    ) : null;
};






