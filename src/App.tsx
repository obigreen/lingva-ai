import React from "react";
import './App.css';
import {English} from "./english/English";
import {S} from "./styles/BlockStyles";
import {Header} from "./english/header/Header";
import {Footer} from "./english/footer/Footer";


const App = () => {
    return (
        <S.Main>
            <S.GlobalWrapper>
                <Header/>
                <S.Container>
                    <S.MainTitle>English words</S.MainTitle>
                    <S.NoteBlock>
                        <English/>
                    </S.NoteBlock>
                </S.Container>
                <Footer/>
            </S.GlobalWrapper>
        </S.Main>
    );
};


export default App;

