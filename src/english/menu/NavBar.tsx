import React from 'react';
import {Link} from 'react-router-dom';
import { S } from './NavBar_Styles'

export const NavBar = () => {
    return (
        <S.HeaderNav>
            <S.Nav>
                <S.Ul>
                    <S.Li><Link to="/verbs">Verbs</Link></S.Li>
                    <S.Li><Link to="/nouns">Nouns</Link></S.Li>
                    <S.Li><Link to="/adjectives">Adjectives</Link></S.Li>
                    <S.Li><Link to="/questions">Questions</Link></S.Li>
                    <S.Li><Link to="/pronouns">Pronouns</Link></S.Li>
                    <S.Li><Link to="/prepositions">Prepositions</Link></S.Li>
                    <S.Li><Link to="/conjunctions">Conjunctions and Particle</Link></S.Li>
                    <S.Li><Link to="/adverbs">Adverbs</Link></S.Li>
                    <S.Li><Link to="/phrases">Phrases</Link></S.Li>
                    <S.Li><Link to="/day-and-time">Day and Time</Link></S.Li>
                    <S.Li><Link to="/programming-translate">Programming Language</Link></S.Li>
                    <S.Li><Link to="/from-video">From video</Link></S.Li>
                    <S.Li><Link to="/theory-eng">Theory Eng</Link></S.Li>
                </S.Ul>
            </S.Nav>
        </S.HeaderNav>

    );
};

