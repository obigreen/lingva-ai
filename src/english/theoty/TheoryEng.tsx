import React from 'react';
import {Article, Text, TypeTitle} from "../../styles/BlockStyles";
import { S } from './Theory_Styles';


type PropsType = {
    title: string
}




export const TheoryEng = ({title}: PropsType) => {

    return (
        <Article>
            <TypeTitle>{title}</TypeTitle>
            <Text>
                {/*do and make*/}
                <S.Section>
                    <S.ParagraphTitle>Разница между <S.Marker>do</S.Marker> и <S.Marker>make</S.Marker></S.ParagraphTitle>

                    <S.Section>
                        <S.TextP><S.Marker>Do</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Do</S.Marker> - используется для обозначения действий, процессов или задач
                                в <S.Marker>общем
                                смысле</S.Marker>, а также в выражениях, связанных с работой, домашними делами и учёбой.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Примеры:</S.Marker> do homework (делать домашнее задание), do business (заниматься
                                бизнесом), do
                                the cleaning (делать уборку).</S.TextP>
                            <S.NoteLi>
                                <S.Marker>Do</S.Marker> - используется в вопросительных и отрицательных предложениях как
                                вспомогательный глагол.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Примеры:</S.Marker> Do you speak English? (Ты говоришь по-английски?), I do not
                                like it. (Мне это не нравится).
                            </S.TextP>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Make</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Make</S.Marker> - используется
                                при <S.Marker>создании</S.Marker>, <S.Marker>производстве</S.Marker>, <S.Marker>приготовлении</S.Marker> чего-либо,
                                а также когда речь идет о принятии решений и подготовке планов.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Примеры:</S.Marker> make breakfast (готовить завтрак), make a decision (принимать
                                решение), make plans (строить планы).
                            </S.TextP>

                            <S.NoteLi>
                                <S.Marker>Make</S.Marker> - также используется для выражения вызванных действий или эмоций.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Примеры:</S.Marker> make someone happy (сделать кого-то счастливым), make a noise
                                (шуметь).
                            </S.TextP>
                        </S.NoteUl>
                    </S.Section>


                    <S.ParagraphTitle>Как запомнить разницу:</S.ParagraphTitle>
                    <S.TextP>
                        <S.Marker>Do</S.Marker> чаще всего касается работы, действий или активностей в общем. Если вы не
                        уверены, какое
                        слово использовать, спросите себя, связано ли это действие с выполнением задачи? Если да, скорее
                        всего подойдет <S.Marker>do</S.Marker>.
                    </S.TextP>
                    <S.TextP>
                        <S.Marker>Make</S.Marker> связано с созданием, производством или приготовлением <S.Marker>чего-то
                        нового</S.Marker>. Если действие влечет
                        за собой результат или что-то в результате <S.Marker>изменяется или создается</S.Marker>,
                        используйте <S.Marker>make</S.Marker>.
                    </S.TextP>

                </S.Section>

                {/*tell speak say spell*/}
                <S.Section>
                    <S.ParagraphTitle>
                        Разница между <S.Marker>Tell</S.Marker>,
                        <S.Marker> Speak</S.Marker>,
                        <S.Marker> Say</S.Marker> и
                        <S.Marker> Spell</S.Marker>
                    </S.ParagraphTitle>

                    <S.Section>
                        <S.TextP><S.Marker>Tell</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Tell</S.Marker> используется, когда информация или история передается от одного
                                человека к другому.
                                Этот глагол требует указания объекта (то есть, кому рассказывается история или
                                информация).
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример:</S.Marker> She told me a secret. (Она рассказала мне секрет.)
                            </S.TextP>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Speak</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Speak</S.Marker> касается акта речи и часто используется, когда дело касается
                                языков или больших
                                обсуждений.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример:</S.Marker> He speaks English fluently. (Он свободно говорит по-английски.)
                            </S.TextP>
                            <S.TextP>
                                <S.Marker>Speak</S.Marker> также используется для обозначения разговора между людьми: They
                                spoke for hours.
                                (Они говорили часами.)
                            </S.TextP>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Say</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Say</S.Marker> используется для выражения конкретных слов или мыслей, часто без
                                указания адресата,
                                или когда адресат указан с помощью предлога "to".
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример:</S.Marker> She says "hello". (Она говорит "привет.")
                            </S.TextP>
                            <S.TextP>
                                <S.Marker>Пример с адресатом:</S.Marker> He said to me that he was tired. (Он сказал мне,
                                что устал.)
                            </S.TextP>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Spell</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Spell</S.Marker> относится к произнесению или написанию отдельных букв слова в
                                правильном порядке.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример:</S.Marker> Can you spell your name? (Можете написать ваше имя по буквам?)
                            </S.TextP>
                        </S.NoteUl>

                    </S.Section>

                    <S.ParagraphTitle>Как запомнить разницу:</S.ParagraphTitle>
                    <S.TextP><S.Marker>Tell</S.Marker> подразумевает передачу информации или повествование и требует указания
                        объекта (кому).
                        Используется больше в контексте длинных разговоров или рассказов.</S.TextP>
                    <S.TextP><S.Marker>Speak</S.Marker> связан с процессом разговора или владения языком. Это общий глагол для
                        обозначения
                        устной речи.</S.TextP>
                    <S.TextP><S.Marker>Say</S.Marker> обычно относится к выражению конкретных слов или фраз. Может
                        использоваться без прямого
                        объекта или с объектом после предлога "to".</S.TextP>
                    <S.TextP><S.Marker>Spell</S.Marker> уникальный и конкретный, поскольку касается правильного произнесения
                        или написания букв
                        слова.</S.TextP>


                </S.Section>

                {/*clever smart and intelligent*/}
                <S.Section>
                    <S.ParagraphTitle>
                        Разница между <S.Marker>clever</S.Marker>,
                        <S.Marker> smart</S.Marker> и
                        <S.Marker> intelligent</S.Marker>
                    </S.ParagraphTitle>

                    <S.Section>
                        <S.TextP><S.Marker>Clever</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Clever</S.Marker> чаще всего означает остроумие или находчивость. Это слово
                                подразумевает способность быстро понимать, изобретать или адаптироваться к новым
                                ситуациям.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример:</S.Marker> He came up with a clever solution to the problem. (Он нашел
                                остроумное решение проблемы.)
                            </S.TextP>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Smart</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Smart</S.Marker> может использоваться в более широком смысле и охватывать
                                умственную остроту, а также хитрость и модность. Кроме того, "smart" часто используется
                                для описания хорошо одетых людей.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример(ум):</S.Marker> She’s smart enough to solve complex math problems. (Она
                                достаточно умна, чтобы решать сложные математические задачи.)
                            </S.TextP>
                            <S.TextP>
                                <S.Marker>Пример(мода):</S.Marker> He looks smart in that suit. (Он выглядит элегантно в
                                этом костюме.)
                            </S.TextP>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Intelligent</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Intelligent</S.Marker> подразумевает большую способность к обучению, пониманию и
                                размышлению, часто на более высоком или абстрактном уровне. Это слово подчеркивает общее
                                интеллектуальное мастерство или высокий уровень ума.
                            </S.NoteLi>
                            <S.TextP>
                                <S.Marker>Пример:</S.Marker> The scientist is known for her intelligent approach to solving
                                environmental issues. (Ученый известен своим интеллектуальным подходом к решению
                                экологических проблем.)
                            </S.TextP>
                        </S.NoteUl>
                    </S.Section>

                    <S.ParagraphTitle>Вывод:</S.ParagraphTitle>
                    <S.TextP>
                        Хотя все три этих термина могут казаться взаимозаменяемыми, разница между ними заключается в
                        коннотациях и контексте использования. <S.Marker>"Clever"</S.Marker> чаще всего означает
                        находчивость и остроумие,
                        <S.Marker>"smart"</S.Marker> — широкую область умственной и социальной остроты или элегантность,
                        а <S.Marker>"intelligent"</S.Marker>
                        говорит о глубоком, часто абстрактном интеллекте.
                    </S.TextP>
                </S.Section>

                {/*House and home*/}
                <S.Section>
                    <S.ParagraphTitle>
                        Разница между <S.Marker>House</S.Marker> и <S.Marker>Home</S.Marker>
                    </S.ParagraphTitle>

                    <S.Section>
                        <S.TextP><S.Marker>House</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>House</S.Marker> используется для обозначения непосредственно здания
                            </S.NoteLi>
                        </S.NoteUl>

                        <S.TextP><S.Marker>Home</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>Home</S.Marker> используется для обозначения самого чувства, уют в доме, дом там
                                где хорошо
                            </S.NoteLi>
                        </S.NoteUl>
                    </S.Section>
                </S.Section>
                {/*e.g and etc*/}
                <S.Section>
                    <S.ParagraphTitle>
                        <S.Marker>e.g</S.Marker> и <S.Marker>etc</S.Marker>
                    </S.ParagraphTitle>

                    <S.Section>
                        <S.TextP><S.Marker>e.g</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>e.g</S.Marker> читается как <S.Marker>for example</S.Marker> переводится
                                как <S.Marker>например</S.Marker>
                            </S.NoteLi>
                        </S.NoteUl>

                        <S.TextP><S.Marker>etc</S.Marker></S.TextP>
                        <S.NoteUl>
                            <S.NoteLi>
                                <S.Marker>etc</S.Marker> /etˈset̬.ər.ə/ переводиться как <S.Marker>и так далее</S.Marker>
                            </S.NoteLi>
                        </S.NoteUl>
                    </S.Section>
                </S.Section>
                <S.Section>
                    <S.ParagraphTitle>
                        <S.Marker>Ударение на слово из <S.Marker>2ух</S.Marker> частей</S.Marker>
                    </S.ParagraphTitle>

                    <S.Section>
                        <S.TextP>Если слово состоит из <S.Marker>2ух</S.Marker> частей</S.TextP>
                        <S.TextP><S.Marker>Например - </S.Marker>Sunglasses</S.TextP>
                        <S.TextP>Ударение ставим на <S.Marker>1ую</S.Marker> часть</S.TextP>
                    </S.Section>
                </S.Section>

            </Text>
        </Article>
    );
};

