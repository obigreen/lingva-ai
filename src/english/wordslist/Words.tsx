import React, {useEffect, useRef, useState} from 'react';
import {Article, TypeTitle, WordsBlock} from "../../styles/BlockStyles";
import {S} from '../English_Styles';
import {useToggleArray} from "../en-components/logics/useToggleArray";
import {useWordTest} from "../en-components/logics/useWordTest";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../en-components/button/Button";
import {categoriesData} from '../en-components/data/categoriesData';
import {WrappButton} from "../wrapper/WrappButton";
import {useSwapWords} from "../en-components/logics/useSwapWords";

type WordListProps = {
    categoryKey: keyof typeof categoriesData;
    title: string
}

export const Words = ({categoryKey, title}: WordListProps) => {

    const [categoryWords, setCategoryWords] = useState(categoriesData[categoryKey]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setCategoryWords(categoriesData[categoryKey]);
    }, [categoryKey]);
    const {array: words, toggleArray} = useToggleArray(categoryWords);

    const {
        isSingleWordMode,
        toggleMode,
        currentWord,
        inputValue,
        setInputValue,
        isCorrect,
        handleNextWord,
        handleCheckTranslation
        //handleCheckTranslation - функция поверки, проверки временно нет
    } = useWordTest(words);

    const { isSwapped, toggleSwap } = useSwapWords();

    // Добавлен эффект для установки фокуса на поле ввода при переходе к следующему слову
    useEffect(() => {
        if (!isCorrect && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isCorrect, currentWord]);


    return (
        <WordsBlock>
            <TypeTitle>{title}</TypeTitle>
            <Article>
                <FlexWrapper gap={'20px'} margin={'0 0 20px 0'} justify={'end'} position={'relative'}>
                    <Button onClick={toggleArray} iconId={'random'}/>
                    <Button onClick={toggleMode} iconId={isSingleWordMode ? "back" : "englishWord"}/>
                    <WrappButton />
                    <Button onClick={toggleSwap} iconId={'arrows'} />
                </FlexWrapper>

                {isSingleWordMode ? (
                    <div>
                        <S.TextWrapper>
                            {isSwapped ? (
                                <S.EngWord>{currentWord.rus}</S.EngWord>
                            ) : (
                                <S.EngWord>{currentWord.eng}</S.EngWord>
                            )}
                            {isCorrect ? (
                                isSwapped ? (
                                    <S.RusWord>{currentWord.eng}</S.RusWord>
                                ) : (
                                    <S.RusWord>{currentWord.rus}</S.RusWord>
                                )
                            ) : (
                                // Добавлена ссылка на inputRef для автоматической установки фокуса
                                <S.Input
                                    ref={inputRef}
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
                                <Button onClick={handleCheckTranslation} title="Проверить"/>
                            ) : (
                                <Button onClick={handleNextWord} title="Следующее слово"/>
                            )}
                        </FlexWrapper>
                    </div>
                ) : (
                    words.map((word, index) => (
                        <S.TextWrapper key={index}>
                            {isSwapped ? (
                                <>
                                    <S.EngWord>{word.rus}</S.EngWord>
                                    <S.RusWord>{word.eng}</S.RusWord>
                                </>
                            ) : (
                                <>
                                    <S.EngWord>{word.eng}</S.EngWord>
                                    <S.RusWord>{word.rus}</S.RusWord>
                                </>
                            )}
                        </S.TextWrapper>
                    ))
                )}
            </Article>
        </WordsBlock>
    );
};
