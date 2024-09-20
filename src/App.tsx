import React from "react";
import './App.css';
import {English} from "./english/English";
import {WrappUse} from "./components/use/WrappUse";
import {S} from "./styles/BlockStyles";


const App = () => {
    return (
        <S.Main>
            <S.Container>
                <S.MainTitle>English</S.MainTitle>
                <S.NoteBlock>
                    <WrappUse/>
                    <English/>
                </S.NoteBlock>
            </S.Container>
        </S.Main>
    );
};


export default App;

