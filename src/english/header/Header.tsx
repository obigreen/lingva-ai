import React, {useState} from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {S} from "./Header_Styles"

export const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark'); // Example for setting data attribute for theme switch
    };

    return (
        <S.Header>
            <FlexWrapper justify={'space-between'} align={'center'} margin={'0 auto'} padding={'15px'}>

                <FlexWrapper justify={'center'} align={'center'}>
                    <Icon iconId={'logo'} width="50" height="50" viewBox={"0 0 32 32"}/>
                </FlexWrapper>

                <S.HeaderNav>
                    <S.HeaderUl>
                        <S.HeaderLi>
                            <S.LoginLink href={'/login'}>
                                Login
                            </S.LoginLink>
                        </S.HeaderLi>
                        /
                        <S.HeaderLi>
                            <S.LoginLink href={'/signUp'}>
                                Sign Up
                            </S.LoginLink>
                        </S.HeaderLi>
                        <S.HeaderLi>
                            <Icon iconId="login" width="20" height="20"/>
                        </S.HeaderLi>
                    </S.HeaderUl>

                    {/* Theme Switcher */}
                    <S.ThemeSwitcher onClick={toggleTheme}>
                        {isDarkTheme ? '🌙' : '☀️'}
                    </S.ThemeSwitcher>
                </S.HeaderNav>
            </FlexWrapper>
        </S.Header>
    );
};


// Styled Components











