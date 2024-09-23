import React, {useEffect, useState} from 'react';
import {Article, TypeTitle, WordsBlock} from "../../styles/BlockStyles";
import {S} from '../English_Styles';
import {useToggleArray} from "../en-components/logics/useToggleArray";
import {useWord} from "../en-components/logics/useWordTest";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../en-components/button/Button";
import {categoriesData} from '../en-components/data/categoriesData';
import {WrappButton} from "../wrapper/WrappButton";

type WordListProps = {
    categoryKey: keyof typeof categoriesData;
    title: string
}

export const Words = ({categoryKey, title}: WordListProps) => {

    const [categoryWords, setCategoryWords] = useState(categoriesData[categoryKey]);
    useEffect(() => {
        setCategoryWords(categoriesData[categoryKey]);
    }, [categoryKey]);
    const {array: words, toggleArray} = useToggleArray(categoryWords);
    const {
        isSingleWordMode, toggleMode, currentWord, inputValue,
        setInputValue, isCorrect, handleNextWord,
        //handleCheckTranslation - функция поверки, проверки временно нет
    } = useWord(words);

    return (
        <WordsBlock>
            <TypeTitle>{title}</TypeTitle>
            <Article>
                <FlexWrapper gap={'20px'} margin={'0 0 20px 0'} justify={'end'} position={'relative'}>
                    <Button onClick={toggleArray} iconId={'random'}/>
                    <Button onClick={toggleMode} iconId={isSingleWordMode ? "back" : "englishWord"}/>
                    <WrappButton />
                </FlexWrapper>

                {isSingleWordMode ? (
                    <div>
                        <S.TextWrapper>
                            <S.EngWord>{currentWord.eng}</S.EngWord>
                            {isCorrect ? (
                                <S.RusWord>{currentWord.rus}</S.RusWord>
                            ) : (
                                <S.Input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Введите перевод"
                                />
                            )}
                        </S.TextWrapper>

                        <FlexWrapper justify={'end'} margin={'20px 0 0 0'}>
                            {!isCorrect ? (
                                //временная callback заглушка, стояло handleCheckTranslation
                                <Button onClick={()=>{}} title="Проверить"/>
                            ) : (
                                <Button onClick={handleNextWord} title="Следующее слово"/>
                            )}
                        </FlexWrapper>
                    </div>
                ) : (
                    words.map((word, index) => (
                        <S.TextWrapper key={index}>
                            <S.EngWord>{word.eng}</S.EngWord>
                            <S.RusWord>{word.rus}</S.RusWord>
                        </S.TextWrapper>
                    ))
                )}
            </Article>
        </WordsBlock>
    );
};
