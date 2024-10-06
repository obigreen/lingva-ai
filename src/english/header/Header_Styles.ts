import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    ${FlexWrapper} {
        max-width: 900px;

    }

    background-color: rgba(30, 31, 34, 0.84);
    z-index: 999;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
`;

const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const HeaderUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 5px;
`;


const HeaderLi = styled.li`
    
`;

const LoginLink = styled.a`
    padding: 5px;
    text-decoration: none;
    font-size: 16px;
    color: var(--text-color);
`;

const ThemeSwitcher = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--text-color);

    &:focus {
        outline: none;
    }
`;

const LogoTitile = styled.span`

`
const Logo = styled.img`

`

export const S = {
    Header, HeaderNav, HeaderUl, HeaderLi, LoginLink, ThemeSwitcher, LogoTitile, Logo
}