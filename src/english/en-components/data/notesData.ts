// Тип одного блока конспекта
export type NoteBlock =
    | { type: 'h2'; content: string }
    | { type: 'p'; content: string }
    | { type: 'ul'; items: string[] }
    | {
    type: 'table';
    headers: string[];
    rows: string[][];
};

// Ключи заметок
export type NoteKey = 'general' | 'pastSimpleBasics' | 'irregularVerbsTable' | 'test';

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

    pastSimpleBasics: {
        title: 'Past Simple & core verb patterns',
        blocks: [
            {
                type: 'h2',
                content: 'Verb GET — one of the most important verbs in English',
            },
            {
                type: 'p',
                content:
                    'Глагол get редко переводится буквально как «получать». В реальной речи он часто меняет значение в зависимости от контекста и заменяет другие глаголы.',
            },
            {
                type: 'ul',
                items: [
                    'get a newspaper — купить / достать',
                    'get a taxi — взять такси',
                    'get an email — получить письмо',
                    'get dressed — одеться',
                    'get home — добраться домой',
                    'get to the airport — добраться до аэропорта',
                    'get up (early / late) — вставать',
                ],
            },
            {
                type: 'p',
                content:
                    'Вывод: get = получать / становиться / добираться / начинать состояние. Это «супер-глагол», который часто заменяет другие.',
            },

            {
                type: 'h2',
                content: 'Past Simple — irregular verbs (неправильные глаголы)',
            },
            {
                type: 'p',
                content:
                    'Неправильные глаголы не образуют Past Simple по правилу. Их форму нужно запоминать.',
            },
            {
                type: 'ul',
                items: [
                    'buy → bought',
                    'can → could',
                    'come → came',
                    'drink → drank',
                    'feel → felt',
                    'find → found',
                    'get → got',
                    'go → went',
                    'have → had',
                    'know → knew',
                    'say → said',
                    'take → took',
                    'think → thought',
                    'wear → wore',
                ],
            },
            {
                type: 'p',
                content:
                    'Важно: форма Past Simple у неправильных глаголов не строится логически — только заучивание. В утвердительных предложениях вспомогательный did не используется.',
            },

            {
                type: 'h2',
                content: 'CAN → COULD (Past Simple)',
            },
            {
                type: 'p',
                content:
                    'В прошедшем времени can всегда превращается в could — во всех типах предложений.',
            },
            {
                type: 'ul',
                items: [
                    'Утверждение: We could see the city.',
                    'Отрицание: I couldn’t see him.',
                    'Вопрос: Could you wear jeans at school?',
                    '❌ I didn’t can see him — НЕПРАВИЛЬНО',
                ],
            },
            {
                type: 'p',
                content:
                    'Правило: can → could. Отрицание: could not / couldn’t. Вопрос: could + subject.',
            },

            {
                type: 'h2',
                content: 'Past Simple — spelling rules (-ed)',
            },
            {
                type: 'p',
                content:
                    'При образовании Past Simple у правильных глаголов важно учитывать орфографию.',
            },
            {
                type: 'ul',
                items: [
                    '+ed: like → liked',
                    'согласная + y → ied: cry → cried',
                    'гласная + y → yed: play → played',
                    'короткий гласный + согласная → удвоение: stop → stopped, plan → planned',
                    'НО: fix → fixed (x не удваивается)',
                ],
            },
            {
                type: 'p',
                content:
                    'Подсказка: буквы X, W, Y никогда не удваиваются.',
            },
        ],
    },

    irregularVerbsTable: {
        title: 'Irregular Verbs — reference table',
        blocks: [
            {
                type: 'p',
                content:
                    'This page is a reference table of the most common irregular verbs with Past Simple, Past Participle and Russian translation.',
            },

            {
                type: 'table',
                headers: [
                    'Infinitive',
                    'Past Simple',
                    'Past Participle',
                    'Translation',
                ],
                rows: [
                    ['be', 'was / were', 'been', 'быть'],
                    ['beat', 'beat', 'beaten', 'бить'],
                    ['become', 'became', 'become', 'становиться'],
                    ['begin', 'began', 'begun', 'начинать'],
                    ['bite', 'bit', 'bitten', 'кусать'],
                    ['blow', 'blew', 'blown', 'дуть'],
                    ['break', 'broke', 'broken', 'ломать(ся)'],
                    ['bring', 'brought', 'brought', 'приносить'],
                    ['build', 'built', 'built', 'строить'],
                    ['burst', 'burst', 'burst', 'разрываться'],
                    ['buy', 'bought', 'bought', 'покупать'],
                    ['catch', 'caught', 'caught', 'ловить'],
                    ['choose', 'chose', 'chosen', 'выбирать'],
                    ['come', 'came', 'come', 'приходить'],
                    ['cost', 'cost', 'cost', 'стоить'],
                    ['cut', 'cut', 'cut', 'резать'],
                    ['deal', 'dealt', 'dealt', 'иметь дело'],
                    ['dig', 'dug', 'dug', 'копать'],
                    ['do', 'did', 'done', 'делать'],
                    ['draw', 'drew', 'drawn', 'рисовать / тянуть'],
                    ['drink', 'drank', 'drunk', 'пить'],
                    ['drive', 'drove', 'driven', 'водить'],
                    ['eat', 'ate', 'eaten', 'есть'],
                    ['fall', 'fell', 'fallen', 'падать'],
                    ['feed', 'fed', 'fed', 'кормить'],
                    ['feel', 'felt', 'felt', 'чувствовать'],
                    ['fight', 'fought', 'fought', 'драться'],
                    ['find', 'found', 'found', 'находить'],
                    ['fly', 'flew', 'flown', 'летать'],
                    ['forget', 'forgot', 'forgotten', 'забывать'],
                    ['freeze', 'froze', 'frozen', 'замерзать'],
                    ['get', 'got', 'got / gotten', 'получать'],
                    ['give', 'gave', 'given', 'давать'],
                    ['go', 'went', 'gone', 'идти'],
                    ['grow', 'grew', 'grown', 'расти'],
                    ['hang', 'hung', 'hung', 'вешать'],
                    ['have', 'had', 'had', 'иметь'],
                    ['hear', 'heard', 'heard', 'слышать'],
                    ['hide', 'hid', 'hidden', 'прятать'],
                    ['hit', 'hit', 'hit', 'ударять'],
                    ['hold', 'held', 'held', 'держать'],
                    ['keep', 'kept', 'kept', 'хранить'],
                    ['know', 'knew', 'known', 'знать'],
                    ['lay', 'laid', 'laid', 'класть'],
                    ['lead', 'led', 'led', 'вести'],
                    ['learn', 'learnt / learned', 'learnt / learned', 'учить'],
                    ['leave', 'left', 'left', 'уходить'],
                    ['lend', 'lent', 'lent', 'одалживать'],
                    ['let', 'let', 'let', 'позволять'],
                    ['lie', 'lay', 'lain', 'лежать'],
                    ['lose', 'lost', 'lost', 'терять'],
                    ['make', 'made', 'made', 'делать'],
                    ['mean', 'meant', 'meant', 'значить'],
                    ['meet', 'met', 'met', 'встречать'],
                    ['pay', 'paid', 'paid', 'платить'],
                    ['put', 'put', 'put', 'класть'],
                    ['read', 'read', 'read', 'читать'],
                    ['ride', 'rode', 'ridden', 'ехать'],
                    ['ring', 'rang', 'rung', 'звонить'],
                    ['run', 'ran', 'run', 'бегать'],
                    ['say', 'said', 'said', 'говорить'],
                    ['see', 'saw', 'seen', 'видеть'],
                    ['seek', 'sought', 'sought', 'искать'],
                    ['sell', 'sold', 'sold', 'продавать'],
                    ['send', 'sent', 'sent', 'отправлять'],
                    ['set', 'set', 'set', 'ставить'],
                    ['shake', 'shook', 'shaken', 'трясти'],
                    ['shine', 'shone', 'shone', 'сиять'],
                    ['shoot', 'shot', 'shot', 'стрелять'],
                    ['show', 'showed', 'shown', 'показывать'],
                    ['shut', 'shut', 'shut', 'закрывать'],
                    ['sing', 'sang', 'sung', 'петь'],
                    ['sit', 'sat', 'sat', 'сидеть'],
                    ['sleep', 'slept', 'slept', 'спать'],
                    ['smell', 'smelt / smelled', 'smelt / smelled', 'пахнуть'],
                    ['speak', 'spoke', 'spoken', 'говорить'],
                    ['spend', 'spent', 'spent', 'тратить'],
                    ['stand', 'stood', 'stood', 'стоять'],
                    ['steal', 'stole', 'stolen', 'воровать'],
                    ['sting', 'stung', 'stung', 'жалить'],
                    ['swim', 'swam', 'swum', 'плавать'],
                    ['take', 'took', 'taken', 'брать'],
                    ['teach', 'taught', 'taught', 'учить'],
                    ['tear', 'tore', 'torn', 'рвать'],
                    ['tell', 'told', 'told', 'рассказывать'],
                    ['think', 'thought', 'thought', 'думать'],
                    ['throw', 'threw', 'thrown', 'бросать'],
                    ['wake', 'woke / waked', 'woken / waked', 'будить'],
                    ['wear', 'wore', 'worn', 'носить'],
                    ['win', 'won', 'won', 'выигрывать'],
                    ['write', 'wrote', 'written', 'писать'],
                ],
            },

            {
                type: 'p',
                content:
                    'Notes: In British English forms like learnt and smelt are more common. In American English learned and smelled are preferred.',
            },
            {
                type: 'p',
                content:
                    'Get: got is standard in British English. Gotten is used in American English to show a result or state.',
            },
        ],
    },


    // Остальные страницы пока заглушки — потом дополнишь
    test: {
        title: 'Test',
        blocks: [{ type: 'p', content: 'Здесь будет грамматика.' }],
    },




};
