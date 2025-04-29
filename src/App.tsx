import React from "react";
import './App.css';
import {English} from "./english/English";
import {S} from "./styles/BlockStyles";
import styled from "styled-components";


const App = () => {
    return (
        <S.Main>
            <S.GlobalWrapper>
                <header>
                    <Container>
                        <div>
                            <a href="">
                                <img src="" alt=""/>
                            </a>
                        </div>
                        <nav>
                            <a href="">Login</a>
                        </nav>
                    </Container>
                </header>
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

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 900px;
    padding: 15px;
    color: white;
`;