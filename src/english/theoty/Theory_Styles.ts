// notesBloks
import styled from "styled-components";

const Section = styled.div`
    margin-bottom: 50px;
`

const BookTitle = styled.h3`
    margin-bottom: 60px;
    font-style: normal;
    font-size: 30px;
    font-weight: 700;
`
const ParagraphTitle = styled.h4`
    margin-bottom: 40px;
    font-style: normal;
    font-size: 24px;
`
const TextP = styled.p`
    margin-bottom: 15px;
    font-weight: 200;
    font-style: normal;
    font-size: 20px;
    line-height: 1.2;

`
const Marker = styled.span`
    //создать маркеру стили и передавать из через пропсы, жирность там, выделение и всякое 
    font-weight: 700;
`

const NoteUl = styled.ul`
    margin-bottom: 20px;
    padding-left: 30px;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
`
const NoteLi = styled.li`
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`




//video
const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Ratio 16:9 (100%/16*9 = 56.25%) */
    height: 0;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 7px 0 rgba(0, 0, 0, 0.19);

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        border: none;
    }
`

export const S = {
    Section, BookTitle, ParagraphTitle, TextP, Marker, NoteUl, NoteLi, VideoContainer
}