import React from 'react';

import {NavBar} from "./menu/NavBar";
import {Words} from "./wordslist/Words";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {Notes} from "./notelist/Notes";


const wordCategories = [
    {path: "/verbs", title: "Verbs"},
    {path: "/nouns", title: "Nouns"},
    {path: "/adjectives", title: "Adjectives"},
    {path: "/questions", title: "Questions"},
    {path: "/pronouns", title: "Pronouns"},
    {path: "/prepositions", title: "Prepositions"},
    {path: "/conjunctions", title: "Conjunctions and Particle"},
    {path: "/adverbs", title: "Adverbs"},
    {path: "/phrases", title: "Phrases"},
    {path: "/day-and-time", title: "Day and Time"},
    {path: "/programming-translate", title: "Programming Language"},
    {path: "/from-video", title: "From video"},
    {path: "/directions", title: "Directions"}
];


const notesNavItems = [
    {path: "/general", title: "General notes"},
    {path: "/pastSimpleBasics", title: "Past Simple & core verb patterns"},
    {path: "/irregularVerbsTable", title: "Irregular Verbs — reference table"},
    {path: "/core-grammar", title: "Core grammar"},
    {path: "/test", title: "Test"}
];


export const English = () => {
    return (
        <>
            <NavBar items={wordCategories}/>

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
                           key="arrQuestions"
                           categoryKey="arrQuestions"/>}/>
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


            <Space/>


            <NavBar items={notesNavItems}/>
            <Routes>
                <Route path="general" element={<Notes
                    title={"General notes"}
                    key="general"
                    categoryKey={"general"}
                />}/>

                <Route path="pastSimpleBasics" element={<Notes
                    title={"Past Simple & core verb patterns"}
                    key="pastSimpleBasics"
                    categoryKey={"pastSimpleBasics"}/>}/>

                <Route path="core-grammar" element={<Notes
                    title={"Grammar notes"}
                    key="coreGrammar"
                    categoryKey={"coreGrammar"}/>}/>


                <Route path="irregularVerbsTable" element={<Notes
                    title={"Irregular Verbs — reference table"}
                    key="irregularVerbsTable"
                    categoryKey={"irregularVerbsTable"}/>}/>

            </Routes>

        </>
    );
};


const Space = styled.div`
    width: 100%;
    height: 60px;
`

