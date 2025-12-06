import React from 'react';
import {Link} from 'react-router-dom';
import { S } from './NavBar_Styles'



type Items = {
    title: string;
    path: string;
}

export type NavBarProps = {
    items: Items[];
    title?: string;
}



export const NavBar = ({items, title} : NavBarProps) => {
    return (
        <S.HeaderNav>
            <S.Nav>
                <S.Ul>
                    {items.map(item => (
                        <S.Li key={item.path}>
                            <Link to={item.path}>{item.title}</Link>
                        </S.Li>
                    ))}
                </S.Ul>
            </S.Nav>
        </S.HeaderNav>

    );
};

