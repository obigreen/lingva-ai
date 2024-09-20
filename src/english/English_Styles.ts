import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";


const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media ${theme.media.tablet} {
        gap: 80px;
    }

    @media ${theme.media.mobile} {
        gap: 60px;
    }
`

const RusWord = styled.p`
    ${font({weight: 600, maxW: 20, minW: 15})};
    font-style: normal;
    width: 50%;
    height: 67px;
    display: flex;
    align-items: center;
    padding: 20px;
`
const EngWord = styled.p`
    ${font({weight: 600, maxW: 20, minW: 15})};
    font-style: normal;
    width: 50%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px;
`

const Input = styled.input`
    width: 50%;
    max-width: 100%;
    border: none;
    padding: 20px;
    font-weight: 400;
    font-size: 23px;
    font-style: normal;
    color: #1e1f22;
    border-radius: 10px;

`

export const S = {
    TextWrapper, RusWord, EngWord, Input
}