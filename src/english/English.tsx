import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./menu/NavBar";
import {WordList} from "./englishwords/WordCategory";
import {TheoryEng} from "./theoty/TheoryEng";


export const English = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/adjectives" element={<WordList title={'Adjectives'} key="adjectives" categoryKey="adjectives" />} />
                <Route path="/adverbs" element={<WordList title={'Adverbs'} key="arrAdverbs" categoryKey="arrAdverbs" />} />
                <Route path="/conjunctions" element={<WordList title={'Conjunctions and Particle'} key="arrConjunctionsAndParticle" categoryKey="arrConjunctionsAndParticle" />} />
                <Route path="/day-and-time" element={<WordList title={'Day and Time'} key="arrDayAndTime" categoryKey="arrDayAndTime" />} />
                <Route path="/nouns" element={<WordList title={'Nouns'} key="arrNouns" categoryKey="arrNouns" />} />
                <Route path="/phrases" element={<WordList title={'Phrases'} key="arrPhrases" categoryKey="arrPhrases" />} />
                <Route path="/prepositions" element={<WordList title={'Prepositions'} key="arrPrepositions" categoryKey="arrPrepositions" />} />
                <Route path="/programming-translate" element={<WordList title={'Programming Language'} key="arrProgrammingLanguage" categoryKey="arrProgrammingLanguage" />} />
                <Route path="/pronouns" element={<WordList title={'Pronouns'} key="arrPronouns" categoryKey="arrPronouns" />} />
                <Route path="/questions" element={<WordList title={'Qestions'} key="arrQestions" categoryKey="arrQestions" />} />
                <Route path="/verbs" element={<WordList title={'Verbs'} key="arrVerbs" categoryKey="arrVerbs" />} />
                <Route path="/theory-eng" element={<TheoryEng title={'Theory'}/>} />
            </Routes>
        </Router>
    );
};


