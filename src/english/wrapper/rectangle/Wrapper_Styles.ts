import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Rectangle = styled.div`
    position: fixed;
    z-index: 99999;
    width: 500px;
    border-radius: 12px 12px 0 0;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); /* Для поддержки Safari */
    border: 1px solid ${theme.color.backround};
`;

export const S = {
    Rectangle
}