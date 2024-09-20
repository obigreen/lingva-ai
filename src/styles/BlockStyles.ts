import styled from "styled-components";

//All notes
export const Article = styled.article`
    max-width: 900px;
    width: 100%;
    margin: 0 auto 120px auto;

    & > :not(:last-of-type) {
        margin-bottom: 70px;
    }
`

export const Text = styled.article`
    padding: 15px;
    background-color: #f7f7f7;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px 0;
    position: relative;
`;


export const TypeTitle = styled.h2`
    font-weight: 600;
    font-size: 30px;
    font-style: normal;
    color: white;
    margin-bottom: 20px;
`

export const Link = styled.a`

`


//App==========

const Main = styled.main`

`

const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 40px 15px;
    margin: 0 auto;
    background-color: #2a2d30;
    position: relative;
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 32px;
    font-style: normal;
    color: white;
`
const NoteBlock = styled.section`
    width: 100%;
    margin: 0 auto 70px auto;
`

//App==========




export const S = {
    Main, Container, MainTitle, NoteBlock,
}
