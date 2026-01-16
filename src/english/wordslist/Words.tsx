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
import {DisplayController, DisplayWord} from "../display/DisplayController";
import {DEFAULT_DISPLAY_CONFIG, DisplayConfig} from "../display/DisplaySettings";

type WordListProps = {
    categoryKey: keyof typeof categoriesData;
    title: string
}


// ======= new
type WordsMode = "list" | "display-settings" | "display-running";
// ======= new


export const Words = ({categoryKey, title}: WordListProps) => {

    const [categoryWords, setCategoryWords] = useState(categoriesData[categoryKey]);
    const inputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        setCategoryWords(categoriesData[categoryKey]);
        setMode("list");
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


    // ======= new
    const [mode, setMode] = useState<WordsMode>("list");
    const [displayConfig, setDisplayConfig] = useState<DisplayConfig>(
        DEFAULT_DISPLAY_CONFIG
    );

    const displayWords: DisplayWord[] = words.map(word => ({
        source: word.source,
        target: word.target
    }));
    // ======= new

    return (
        <WordsBlock>
            <TypeTitle>{title}</TypeTitle>

            {/* ========== ОСНОВНОЙ РЕЖИМ (СЛОВАРЬ) ========== */}
            {mode === "list" && (
                <Article>
                    <FlexWrapper
                        gap={'20px'}
                        margin={'0 0 20px 0'}
                        justify={'end'}
                        position={'relative'}
                    >
                        <Button onClick={toggleArray} iconId={'random'} />
                        <Button
                            onClick={toggleMode}
                            iconId={isSingleWordMode ? "back" : "englishWord"}
                        />
                        <WrappButton />
                        <Button onClick={toggleSwap} iconId={'arrows'} />

                        {/* 🔥 DISPLAY MODE */}
                        <Button
                            title="Display"
                            onClick={() => setMode("display-settings")}
                        />
                    </FlexWrapper>

                    {isSingleWordMode ? (
                        <div>
                            <S.TextWrapper>
                                {isSwapped ? (
                                    <S.TargetWord>{currentWord.source}</S.TargetWord>
                                ) : (
                                    <S.TargetWord>{currentWord.target}</S.TargetWord>
                                )}

                                {isCorrect ? (
                                    isSwapped ? (
                                        <S.SourceWord>{currentWord.target}</S.SourceWord>
                                    ) : (
                                        <S.SourceWord>{currentWord.source}</S.SourceWord>
                                    )
                                ) : (
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
                                    <Button
                                        onClick={handleCheckTranslation}
                                        title="Проверить"
                                    />
                                ) : (
                                    <Button
                                        onClick={handleNextWord}
                                        title="Следующее слово"
                                    />
                                )}
                            </FlexWrapper>
                        </div>
                    ) : (
                        words.map((word, index) => (
                            <S.TextWrapper key={index}>
                                {isSwapped ? (
                                    <>
                                        <S.TargetWord>{word.target}</S.TargetWord>
                                        <S.SourceWord>{word.source}</S.SourceWord>
                                    </>
                                ) : (
                                    <>
                                        <S.TargetWord>{word.source}</S.TargetWord>
                                        <S.SourceWord>{word.target}</S.SourceWord>
                                    </>
                                )}
                            </S.TextWrapper>
                        ))
                    )}
                </Article>
            )}

            {/*{======= new =======}*/}
            {mode !== "list" && (
                <DisplayController
                    words={displayWords}
                    mode={mode === "display-settings" ? "settings" : "running"}
                    config={displayConfig}
                    onConfigChange={setDisplayConfig}
                    onStart={() => setMode("display-running")}
                    onBackToSettings={() => setMode("display-settings")}
                    onExit={() => setMode("list")}
                />
            )}
            {/*{======= new =======}*/}
        </WordsBlock>
    );
};
