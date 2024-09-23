import styled from "styled-components";

const HeaderNav = styled.header`
    display: flex;
    margin: 0 auto 50px auto;
    justify-content: center;
    max-width: 900px;
    padding: 0 15px;
`

const Nav = styled.nav`
    position: relative;
    margin: 10px 0;
    padding: 15px;
    border-radius: 12px;
    background-color: #f7f7f7;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`

const Li = styled.li`
    border: none;
    border-radius: 10px;
    font-style: normal;
    font-size: 20px;
    background-color: #1e1f22;
    color: white;
    cursor: pointer;
    
    a {
        display: block;
        padding: 10px;
        font-size: 20px;
    }
`

export const S = {
    HeaderNav, Nav, Ul, Li
}