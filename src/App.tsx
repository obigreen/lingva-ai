import React from "react";
import './App.css';
import {English} from "./english/English";
import {S} from "./styles/BlockStyles";


const App = () => {
    return (
        <S.Main>
            <S.GlobalWrapper>
                <S.Container>
                    <S.MainTitle>English words and phrases</S.MainTitle>
                    <S.NoteBlock>
                        <English/>
                    </S.NoteBlock>
                </S.Container>
            </S.GlobalWrapper>
        </S.Main>
    );
};


export default App;

