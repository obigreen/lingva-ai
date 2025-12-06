// Тип одного блока конспекта
export type NoteBlock =
    | { type: 'h2'; content: string }
    | { type: 'p'; content: string }
    | { type: 'ul'; items: string[] };

// Ключи заметок
export type NoteKey = 'general' | 'grammar' | 'vocabulary';

// Описание одной заметки
export type Note = {
    title: string;
    blocks: NoteBlock[];
};

// Все заметки
export const notesData: Record<NoteKey, Note> = {
    general: {
        title: 'General notes',
        blocks: [
            // 1. ИДИОМЫ И ПОЛЕЗНЫЕ ФРАЗЫ
            { type: 'h2', content: '1. ИДИОМЫ И ПОЛЕЗНЫЕ ФРАЗЫ' },
            {
                type: 'p',
                content: '"A piece of cake" — это очень легко, проще простого.',
            },
            {
                type: 'p',
                content:
                    '"You’re the apple of my eye" — самый дорогой человек (не life).',
            },
            {
                type: 'p',
                content:
                    '"Guilty pleasure food" — еда, которую любишь, но считаешь "греховной" (чипсы, пицца, сладкое).',
            },
            {
                type: 'p',
                content:
                    '"I don’t mind" = мне всё равно, я не против. Степень отношения:',
            },
            {
                type: 'ul',
                items: ['love → like → don’t mind → don’t like → hate'],
            },
            {
                type: 'p',
                content:
                    '"Me neither" / "…either" используем в отрицаниях: — I don’t like it. — Me neither. / I don’t like it either.',
            },

            // 2. ПРОИЗНОШЕНИЕ: life / live / live
            { type: 'h2', content: '2. ПРОИЗНОШЕНИЕ: life / live / live' },
            {
                type: 'ul',
                items: [
                    'life [laif] — жизнь',
                    'live [liv] — жить',
                    'live [laiv] — живой (live concert)',
                ],
            },

            // 3. ГЕРУНДИЙ (V+ING)
            { type: 'h2', content: '3. ГЕРУНДИЙ (V+ING)' },
            {
                type: 'p',
                content:
                    'Герундий — это форма глагола с -ing, которая работает как существительное: smoking, parking и т.д.',
            },
            {
                type: 'p',
                content:
                    'Скрин “No smoking” → smoking = курение, существительное.',
            },
            {
                type: 'ul',
                items: [
                    'после like / love / hate / don’t mind',
                    'после enjoy / prefer',
                    'в предупреждениях: “No parking”, “No smoking”',
                ],
            },
            {
                type: 'ul',
                items: [
                    'I like going to the cinema.',
                    'She hates driving at night.',
                    'I don’t mind getting up early.',
                ],
            },

            // 4. ПРИТЯЖАТЕЛЬНЫЕ ФОРМЫ ('S / S')
            { type: 'h2', content: "4. ПРИТЯЖАТЕЛЬНЫЕ ФОРМЫ ('S / S')" },
            {
                type: 'p',
                content: "’s — чей? Используем для единственного числа.",
            },
            {
                type: 'ul',
                items: ['my mother’s birthday', 'Penelope’s sister'],
            },
            {
                type: 'p',
                content: "s’ — если существительное во множественном числе.",
            },
            {
                type: 'ul',
                items: ['her parents’ house', 'the students’ desks'],
            },
            {
                type: 'p',
                content:
                    'Важное исключение: The couple argue a lot. “Couple” — по смыслу множественное.',
            },

            // 5. ВОПРОСЫ (Wh-questions)
            { type: 'h2', content: '5. ВОПРОСЫ (Wh-questions)' },
            {
                type: 'p',
                content:
                    'Форма вопроса в Present Simple: Wh-word + do/does + subject + verb?',
            },
            {
                type: 'ul',
                items: [
                    'Where do you meet?',
                    'What does Jason play?',
                    'Who do you work with?',
                    'How old is Fiona?',
                ],
            },
            {
                type: 'p',
                content: 'Предлог ставится в конце:',
            },
            {
                type: 'ul',
                items: ['Who do you play games with?', 'Who does she work with?'],
            },

            // 6. LIKE / WOULD LIKE
            { type: 'h2', content: '6. LIKE / WOULD LIKE' },
            {
                type: 'p',
                content:
                    'like + Ving = нравится. Примеры: I like flying. I enjoy watching football.',
            },
            {
                type: 'p',
                content:
                    'would like + to V = хочу (вежливо). Пример: I would like to try parachuting.',
            },

            // 7. FREQUENCY ADVERBS
            { type: 'h2', content: '7. FREQUENCY ADVERBS (always, usually, often…)' },
            {
                type: 'p',
                content: 'Позиции наречий частоты:',
            },
            {
                type: 'ul',
                items: [
                    'перед обычным глаголом: I always watch TV.',
                    'после to be: He is often stressed.',
                ],
            },
            {
                type: 'p',
                content: 'Выражения частоты:',
            },
            {
                type: 'ul',
                items: ['twice a week', 'every day', 'hardly ever'],
            },

            // 8. SOME / ANY / A LOT OF / LOTS OF
            {
                type: 'h2',
                content: '8. SOME / ANY / A LOT OF / LOTS OF / THERE IS / THERE ARE',
            },
            {
                type: 'p',
                content: 'ANY — в отрицаниях и вопросах:',
            },
            {
                type: 'ul',
                items: ['I don’t have any milk.', 'Do you have any apples?'],
            },
            {
                type: 'p',
                content: 'SOME — в утвердительных:',
            },
            {
                type: 'ul',
                items: ['I have some eggs.'],
            },
            {
                type: 'p',
                content: 'A LOT OF / LOTS OF — работают везде:',
            },
            {
                type: 'ul',
                items: ['a lot of chocolate', 'lots of people', 'a lot of hamburgers'],
            },
            {
                type: 'p',
                content: 'There is / There are + a lot of / lots of:',
            },
            {
                type: 'ul',
                items: [
                    'There are a lot of tomatoes. (множественное)',
                    'There is lots of ice cream. (неисчисляемое)',
                ],
            },

            // 9. MUCH / MANY
            { type: 'h2', content: '9. MUCH / MANY' },
            {
                type: 'p',
                content: 'much → неисчисляемые существительные:',
            },
            {
                type: 'ul',
                items: ['How much sugar?', 'I don’t drink much water.'],
            },
            {
                type: 'p',
                content: 'many → исчисляемые:',
            },
            {
                type: 'ul',
                items: ['How many apples?', 'Not many eggs.'],
            },

            // 10. ЕДА И ЕЁ КАЧЕСТВА
            { type: 'h2', content: '10. ЕДА И ЕЁ КАЧЕСТВА' },
            {
                type: 'ul',
                items: [
                    'fruits and vegetables → vegetarian',
                    'biscuits, old bread → dry',
                    'pork, butter → fatty',
                    'popcorn, crisps → salty',
                    'honey, cakes, sugar → sweet',
                ],
            },

            // 11. LEARNED VOCABULARY
            { type: 'h2', content: '11. LEARNED VOCABULARY' },
            {
                type: 'ul',
                items: [
                    'belong — принадлежать',
                    'guess — угадай',
                    'imagine — представь',
                    'decide — решить',
                    'almost — почти',
                    'let me think — дай подумать',
                    'hang on — подожди',
                    'to catch a cold — простудиться',
                    'headache — головная боль',
                ],
            },

            // 12. ПОРЯДКОВЫЕ ЧИСЛИТЕЛЬНЫЕ
            { type: 'h2', content: '12. ПОРЯДКОВЫЕ ЧИСЛИТЕЛЬНЫЕ' },
            {
                type: 'ul',
                items: [
                    '1st — first',
                    '2nd — second',
                    '3rd — third',
                    '4th — fourth',
                    '5th — fifth',
                    '10th — tenth',
                    '21st — twenty-first',
                    '30th — thirtieth',
                    '31st — thirty-first',
                ],
            },

            // 13. ПРОШЕДШЕЕ ВРЕМЯ WAS / WERE
            { type: 'h2', content: '13. ПРОШЕДШЕЕ ВРЕМЯ WAS / WERE' },
            {
                type: 'ul',
                items: [
                    'I / he / she / it → was',
                    'you / we / they → were',
                    'was not (wasn’t) / were not (weren’t)',
                    'вопросы: Was he…? Were they…?',
                ],
            },

            // 14. ПРЕДЛОГИ ВРЕМЕНИ (IN / ON / AT)
            { type: 'h2', content: '14. ПРЕДЛОГИ ВРЕМЕНИ (IN / ON / AT)' },
            {
                type: 'p',
                content: 'IN — годы, месяцы, времена года, части дня:',
            },
            {
                type: 'ul',
                items: ['in 2024', 'in May', 'in summer', 'in the morning'],
            },
            {
                type: 'p',
                content: 'ON — дни недели и даты:',
            },
            {
                type: 'ul',
                items: ['on Tuesday', 'on the 1st of June'],
            },
            {
                type: 'p',
                content: 'AT — точное время, праздники, ночь:',
            },
            {
                type: 'ul',
                items: ['at 8 o’clock', 'at Christmas', 'at night'],
            },

            // 15. ПРЕДЛОГИ МЕСТА
            { type: 'h2', content: '15. ПРЕДЛОГИ МЕСТА' },
            {
                type: 'ul',
                items: [
                    'through = через (внутри пространства)',
                    'along = вдоль',
                    'across = поперёк',
                ],
            },

            // 16. СОКРАЩЕНИЯ В ВОПРОСАХ
            { type: 'h2', content: '16. СОКРАЩЕНИЯ В ВОПРОСАХ' },
            {
                type: 'p',
                content: 'Можно сокращать:',
            },
            {
                type: 'ul',
                items: ["What’s", "Where’s", "Who’s", "How’s"],
            },
            {
                type: 'p',
                content: 'Нельзя:',
            },
            {
                type: 'ul',
                items: [
                    'Why’s — почти не используется',
                    'are — никогда не сокращается после вопросительных слов',
                ],
            },
        ],
    },

    // Остальные страницы пока заглушки — потом дополнишь
    grammar: {
        title: 'Grammar notes',
        blocks: [{ type: 'p', content: 'Здесь будет грамматика.' }],
    },

    vocabulary: {
        title: 'Vocabulary notes',
        blocks: [{ type: 'p', content: 'Здесь будет словарный запас.' }],
    },
};
