import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <FooterWrapp>
            <FlexWrapper justify={'end'} align={'center'} padding={'15px'}>
                <FooterNav>
                    <FooterUl>
                        <FooterLi>
                            <FooterLink href="">
                                <Icon iconId={'telegram'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                            </FooterLink>
                        </FooterLi>
                        <FooterLi>
                            <FooterLink href="">
                                <Icon iconId={'whatsapp'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                            </FooterLink>
                        </FooterLi>

                        <FooterLi>
                            <FooterLink href="">
                                <Icon iconId={'gitHub'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                            </FooterLink>
                        </FooterLi>

                        <FooterLi>
                            <FooterLink href="">
                                <Icon iconId={'gmail'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                            </FooterLink>
                        </FooterLi>
                    </FooterUl>
                </FooterNav>
            </FlexWrapper>

        </FooterWrapp>
    );
};

const FooterWrapp = styled.footer`
    max-width: 1140px;
    margin: 0 auto;
    background-color: ${theme.color.backroundUp};

    ${FlexWrapper} {
        max-width: 900px;
        margin: 0 auto;
    }
`

const FooterNav = styled.nav`

`
const FooterUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`
const FooterLi = styled.li`

`
const FooterLink = styled.a`
    display: flex;
`

