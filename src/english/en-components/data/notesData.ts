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
export type NoteKey = 'general' | 'pastSimpleBasics' | 'irregularVerbsTable' | 'randomOne' | 'coreGrammar' | 'test';

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
                    'drive → drove',
                    'make → made',
                    'sit → sat',
                    'read → read[red])',
                    'hear → heard',
                    'leave → left',
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
                    ['run', 'ran', 'run', 'бегать']
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

    randomOne: {
        title: 'Grammar & Usage (from screenshots)',
        blocks: [
            // =========================================================
            // 1) Be crazy about / Guilty pleasure
            // =========================================================
            { type: 'h2', content: '1) Be crazy about / Guilty pleasure' },

            {
                type: 'p',
                content:
                    'Фраза “be crazy about …” означает “очень сильно любить / обожать / быть без ума от чего-то”. Это разговорная, естественная конструкция. По смыслу близко к “really love”, но звучит эмоциональнее.',
            },
            {
                type: 'ul',
                items: [
                    'They are crazy about cheese. — Они обожают сыр.',
                    'I’m crazy about this game. — Я без ума от этой игры.',
                    'She’s crazy about travelling. — Она обожает путешествовать.',
                ],
            },
            {
                type: 'p',
                content:
                    '“Guilty pleasure” — это “виноватое удовольствие”: то, что тебе очень нравится, но за что немного стыдно (обычно еда, сериал, привычка). Часто используется как существительное: “This is my guilty pleasure.”',
            },
            {
                type: 'ul',
                items: [
                    'Cheese is my guilty pleasure. — Сыр — моё guilty pleasure.',
                    'Chocolate is his guilty pleasure. — Шоколад — его guilty pleasure.',
                    'Watching reality shows is my guilty pleasure. — Смотреть реалити-шоу — моё guilty pleasure.',
                ],
            },
            {
                type: 'p',
                content:
                    'Связка из твоего скрина: можно совместить обе идеи в одной мысли — “guilty pleasure: they are crazy about cheese” (их guilty pleasure — сыр, они его обожают).',
            },

            // =========================================================
            // 2) SO — result / consequence
            // =========================================================
            { type: 'h2', content: '2) SO — результат / следствие' },

            {
                type: 'p',
                content:
                    '“So” — союз, который показывает результат или следствие. Логика такая: причина → so → результат.',
            },
            {
                type: 'table',
                headers: ['Формула', 'Пример', 'Перевод'],
                rows: [
                    [
                        'Причина + so + результат',
                        'I was very tired, so I went to bed early.',
                        'Я был очень уставшим, поэтому рано лёг спать.',
                    ],
                    [
                        'Причина + so + результат',
                        'My office is near my house, so I walk to work.',
                        'Мой офис рядом с домом, поэтому я хожу на работу пешком.',
                    ],
                    [
                        'Причина + so + результат',
                        "The kitchen is small, but there’s a table, so you can eat there.",
                        'Кухня маленькая, но там есть стол, поэтому ты можешь там есть.',
                    ],
                ],
            },
            {
                type: 'p',
                content:
                    'Важно: “so” — это НЕ “так”. Это именно “поэтому / поэтому-то”. Если хочешь сказать “так” (образ действия), обычно нужно “like this / this way”.',
            },

            // =========================================================
            // 3) There was / There were (Past of there is/are)
            // =========================================================
            { type: 'h2', content: '3) There was / There were — “там было / там были”' },

            {
                type: 'p',
                content:
                    '“There was / there were” — это прошедшее время от “there is / there are”. Используется, чтобы описывать наличие/отсутствие чего-то в прошлом (в комнате, городе, доме, истории).',
            },
            {
                type: 'table',
                headers: ['Когда', 'Форма', 'Примеры'],
                rows: [
                    [
                        'Единственное число / неисчисляемое',
                        'There was …',
                        'There was a big mirror. / There was some milk.',
                    ],
                    [
                        'Множественное число',
                        'There were …',
                        'There were four lamps. / There were many people.',
                    ],
                ],
            },

            { type: 'h2', content: '3.1) Утверждение / отрицание / вопрос' },

            {
                type: 'table',
                headers: ['Тип', 'Singular', 'Plural'],
                rows: [
                    ['✅ Утверждение', 'There was a big mirror.', 'There were four lamps.'],
                    ['❌ Отрицание', "There wasn’t a TV.", "There weren’t any ghosts."],
                    ['❓ Вопрос', 'Was there a bathroom?', 'Were there any windows?'],
                ],
            },

            {
                type: 'p',
                content:
                    'Короткие ответы (как в твоём скрине):',
            },
            {
                type: 'ul',
                items: [
                    'Was there a bathroom? — Yes, there was. / No, there wasn’t.',
                    'Were there any windows? — Yes, there were. / No, there weren’t.',
                ],
            },
            {
                type: 'p',
                content:
                    'Подсказка: если после “there …” стоит множественное число, почти всегда будет “were”. Если единственное — “was”.',
            },

            // =========================================================
            // 4) Мини-блок на закрепление (коротко, но полезно)
            // =========================================================
            { type: 'h2', content: '4) Быстрые примеры для практики' },
            {
                type: 'ul',
                items: [
                    'I’m crazy about cheese, so I eat it every day. — Я обожаю сыр, поэтому ем его каждый день.',
                    'There was a big mirror in the hall. — В коридоре было большое зеркало.',
                    'There weren’t any windows in the room, so it was dark. — В комнате не было окон, поэтому было темно.',
                ],
            },
        ],
    },


    coreGrammar: {
        title: 'Have got, Place, Movement, Countable/Uncountable',
        blocks: [
            { type: 'h2', content: '1) Have got / Has got' },
            {
                type: 'p',
                content:
                    '"Have got" = "have" (иметь). Это разговорная форма, очень часто используется в британском английском.',
            },
            {
                type: 'table',
                headers: ['Утверждение', 'Отрицание', 'Вопрос'],
                rows: [
                    ['I have got', "I haven’t got", 'Have I got…?'],
                    ['You have got', "You haven’t got", 'Have you got…?'],
                    ['He/She/It has got', "He/She/It hasn’t got", 'Has he/she/it got…?'],
                    ['We have got', "We haven’t got", 'Have we got…?'],
                    ['They have got', "They haven’t got", 'Have they got…?'],
                ],
            },
            {
                type: 'ul',
                items: [
                    'I have got long dark hair.',
                    'She has got straight blonde hair.',
                    'I haven’t got straight hair.',
                    'Has she got any talents?',
                ],
            },
            {
                type: 'p',
                content:
                    'Важно: после have/has got НЕ используем do/does. ❌ Do you have got? → ✅ Have you got?',
            },

            { type: 'h2', content: '2) Place — предлоги места' },
            {
                type: 'table',
                headers: ['Предлог', 'Транскрипция', 'Пример'],
                rows: [
                    ['in', '/ɪn/', 'in the wardrobe'],
                    ['on', '/ɒn/', 'on the chair'],
                    ['under', '/ˈʌndə/', 'under the bed'],
                    ['behind', '/bɪˈhaɪnd/', 'behind the sofa'],
                    ['between', '/bɪˈtwiːn/', 'between the windows'],
                    ['next to', '/nekst tuː/', 'next to the armchair'],
                    ['opposite', '/ˈɒpəzɪt/', 'opposite the woman'],
                    ['over', '/ˈəʊvə/', 'over the mirror'],
                ],
            },
            {
                type: 'p',
                content:
                    'between = между (между двумя объектами). На картинке призрак стоит между окнами.',
            },

            { type: 'h2', content: '3) Movement — предлоги движения' },
            {
                type: 'table',
                headers: ['Предлог', 'Транскрипция', 'Пример'],
                rows: [
                    ['into', '/ˈɪntuː/', 'into the wardrobe'],
                    ['out of', '/aʊt əv/', 'out of the wardrobe'],
                    ['through', '/θruː/', 'through the window'],
                    ['up', '/ʌp/', 'up the stairs'],
                    ['down', '/daʊn/', 'down the stairs'],
                    ['from … to …', '/frɒm … tuː/', 'from the bedroom to the bathroom'],
                ],
            },
            {
                type: 'p',
                content:
                    'through = через (движение сквозь что-то). На картинке призрак выпрыгивает through the window.',
            },

            { type: 'h2', content: '4) Countable / Uncountable nouns' },
            {
                type: 'p',
                content:
                    'Countable — можно посчитать (an apple, three apples). Uncountable — нельзя посчитать (rice, meat, sugar).',
            },
            {
                type: 'table',
                headers: ['Тип', 'Примеры'],
                rows: [
                    ['Countable', 'an apple, a tomato, oranges'],
                    ['Uncountable', 'rice, meat, butter, sugar'],
                ],
            },
            { type: 'h2', content: '4.1) a / an / some / any' },
            {
                type: 'table',
                headers: ['Когда используем', 'Countable', 'Uncountable'],
                rows: [
                    ['Утверждение (+)', 'a tomato / some tomatoes', 'some rice'],
                    ['Отрицание (-)', 'any tomatoes', 'any rice'],
                    ['Вопрос (?)', 'any oranges?', 'any sugar?'],
                ],
            },
            {
                type: 'ul',
                items: [
                    'a/an — только с единственным countable.',
                    'some — в утверждениях (и в вежливых вопросах).',
                    'any — в отрицаниях и вопросах.',
                    'Can I have some sugar? (предложение/просьба)',
                ],
            },

            { type: 'h2', content: '5) Over vs Above' },
            {
                type: 'p',
                content:
                    'Оба слова означают "над", но используются немного по-разному.',
            },
            {
                type: 'table',
                headers: ['Over', 'Above'],
                rows: [
                    ['Есть движение или покрытие', 'Просто положение выше'],
                    ['The ghost jumped over the table.', 'The clock is above the door.'],
                    ['The plane flew over the city.', 'There’s a light above the mirror.'],
                ],
            },
            {
                type: 'ul',
                items: [
                    'Over часто используется при движении.',
                    'Above — статичное положение выше.',
                    'Sometimes they can be similar, but movement = over.',
                ],
            },
        ],
    },


    // Остальные страницы пока заглушки — потом дополнишь
    test: {
        title: 'Test',
        blocks: [{ type: 'p', content: 'Здесь будет грамматика.' }],
    },




};
