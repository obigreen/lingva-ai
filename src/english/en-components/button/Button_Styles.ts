import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    padding: 10px;
    border: none;
    background-color: #1e1f22;
    cursor: pointer;
    color: white;
    font-style: normal;
    font-size: 18px;
    min-width: 52px;
    min-height: 52px;

    svg {
        width: 28px;
        height: 28px;
    }

    @media ${theme.media.mobile} {
        padding: 7px;
        border-radius: 8px;
        font-size: 14px;
        min-width: 40px;
        min-height: 40px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`

export const S = {
    Button
}
