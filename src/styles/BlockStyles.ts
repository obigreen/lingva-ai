import styled from "styled-components";

//All notes
export const WordsBlock = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
`

export const Article = styled.article`
    position: relative;
    padding: 15px;
    border-radius: 12px;
    background-color: #f7f7f7;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


export const TypeTitle = styled.h2`
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 30px;
    font-style: normal;
    color: white;
`

export const Link = styled.a`

`


//App==========

const Main = styled.main`
    display: grid;
    grid-template-rows: auto 1fr auto; /* Верхняя часть, контент, подвал */
    min-height: 100vh; /* Заставляем main быть минимум высотой в экран */
`

const Container = styled.div`
    grid-row: 2; /* Контейнер находится на второй строке грида (в центре) */
    position: relative;
    max-width: 1140px;
    width: 100%;
    height: 100%;
    padding: 40px 15px;
    margin: 0 auto;
    background-color: #2a2d30;
`

const MainTitle = styled.h1`
    max-width: 900px;
    margin: 0 auto 50px auto;
    font-weight: 600;
    font-size: 32px;
    font-style: normal;
    color: white;
`
const NoteBlock = styled.section`
    width: 100%;
    margin: 0 auto;
`

//App==========


export const S = {
    Main, Container, MainTitle, NoteBlock,
}
