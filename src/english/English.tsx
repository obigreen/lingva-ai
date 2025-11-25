import React from 'react';

import {NavBar} from "./menu/NavBar";
import {Words} from "./wordslist/Words";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {Notes} from "./notelist/Notes";


export const English = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Navigate to={"adjectives"}/>}/>
                <Route path="adjectives"
                       element={<Words
                           title={'Adjectives'}
                           key="adjectives"
                           categoryKey="arrAdjectives"/>}/>
                <Route path="adverbs"
                       element={<Words
                           title={'Adverbs'}
                           key="arrAdverbs"
                           categoryKey="arrAdverbs"/>}/>
                <Route path="conjunctions"
                       element={<Words
                           title={'Conjunctions and Particle'}
                           key="arrConjunctionsAndParticle"
                           categoryKey="arrConjunctionsAndParticle"/>}/>
                <Route path="day-and-time"
                       element={<Words
                           title={'Day and Time'}
                           key="arrDayAndTime"
                           categoryKey="arrDayAndTime"/>}/>
                <Route path="nouns"
                       element={<Words
                           title={'Nouns'}
                           key="arrNouns"
                           categoryKey="arrNouns"/>}/>
                <Route path="phrases"
                       element={<Words
                           title={'Phrases'}
                           key="arrPhrases"
                           categoryKey="arrPhrases"/>}/>
                <Route path="prepositions"
                       element={<Words
                           title={'Prepositions'}
                           key="arrPrepositions"
                           categoryKey="arrPrepositions"/>}/>
                <Route path="programming-translate"
                       element={<Words
                           title={'Programming Language'}
                           key="arrProgrammingLanguage"
                           categoryKey="arrProgrammingLanguage"/>}/>
                <Route path="pronouns"
                       element={<Words
                           title={'Pronouns'}
                           key="arrPronouns"
                           categoryKey="arrPronouns"/>}/>
                <Route path="questions"
                       element={<Words
                           title={'Qestions'}
                           key="arrQestions"
                           categoryKey="arrQestions"/>}/>
                <Route path="verbs"
                       element={<Words
                           title={'Verbs'}
                           key="arrVerbs"
                           categoryKey="arrVerbs"/>}/>
                <Route path="from-video"
                       element={<Words
                           title={'From video'}
                           key="arrFromMyVideo"
                           categoryKey="arrFromMyVideo"/>}/>
                <Route path="directions"
                       element={<Words
                           title={'Directions'}
                           key="arrDirections"
                           categoryKey="arrDirections"/>}/>
            </Routes>
            <NotesPages>
                <Container>

                    <Notes/>

                </Container>
            </NotesPages>
        </>
    );
};


const NotesPages = styled.div`
    display: flex;
    margin: 0 auto 50px auto;
    justify-content: center;
    max-width: 900px;
    padding: 0 15px;

`

const Container = styled.div`
    position: relative;
    margin: 10px 0;
    padding: 15px;
    border-radius: 12px;
    background-color: #f7f7f7;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`


