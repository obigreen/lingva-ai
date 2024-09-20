import React, { useEffect, useState } from 'react';
import {Article, Text, TypeTitle} from "../../styles/BlockStyles";
import { S } from '../English_Styles';
import { useToggleArray } from "../hooks/useToggleArray";
import { useWord } from "../hooks/useWordTest";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Button } from "../button/Button";
import { categoriesData } from '../data/categoriesData'; // Импорт всех категорий

type WordListProps = {
    categoryKey: keyof typeof categoriesData; // Ключ для выбора категории
    title: string
}

export const WordList = ({ categoryKey, title }: WordListProps) => {
    // Состояние для хранения слов в выбранной категории
    const [categoryWords, setCategoryWords] = useState(categoriesData[categoryKey]);

    // Обновляем слова при изменении категории
    useEffect(() => {
        setCategoryWords(categoriesData[categoryKey]);
    }, [categoryKey]);

    // Используем хук для работы с массивом слов
    const { array: words, toggleArray } = useToggleArray(categoryWords);

    // Логика работы с отдельными словами (для режима проверки по одному слову)
    const {
        isSingleWordMode, toggleMode, currentWord, inputValue,
        setInputValue, isCorrect, handleNextWord, handleCheckTranslation
    } = useWord(words);

    return (
        <Article>
            <TypeTitle>{title}</TypeTitle>
            <Text>
                <FlexWrapper gap={'20px'} margin={'0 0 20px 0'}>
                    <Button onClick={toggleArray} iconId={'random'} />
                    <Button onClick={toggleMode} iconId={isSingleWordMode ? "back" : "englishWord"} />
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

                        {!isCorrect ? (
                            <Button onClick={handleCheckTranslation} title="Проверить" />
                        ) : (
                            <Button onClick={handleNextWord} title="Следующее слово" />
                        )}
                    </div>
                ) : (
                    words.map((word, index) => (
                        <S.TextWrapper key={index}>
                            <S.EngWord>{word.eng}</S.EngWord>
                            <S.RusWord>{word.rus}</S.RusWord>
                        </S.TextWrapper>
                    ))
                )}
            </Text>
        </Article>
    );
};
