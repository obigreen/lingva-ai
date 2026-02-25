import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Button_Styles"


export type PropsType = {
    onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
    iconId?: string;
    title?: string
}

export const Button = ({onClick, title, iconId}: PropsType) => {
    return (
        <S.Button onClick={onClick}>
            {iconId ? <Icon iconId={iconId} width="32" height="32" viewBox={"0 0 32 32"}/> : title}
        </S.Button>
    );
};

