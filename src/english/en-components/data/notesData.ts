
// Тип одного блока конспекта
export type NoteBlock =
    | { type: "h2"; content: string }
    | { type: "p"; content: string }
    | { type: "ul"; items: string[] };

// Ключи конспектов (можешь потом расширять)
export type NoteKey = "general" | "grammar" | "vocabulary";

export type Note = {
    title: string;
    blocks: NoteBlock[];
};


export const notesData: Record<NoteKey, Note> = {
    general: {
        title: "General notes",
        blocks: [
            { type: "h2", content: "Что-то" },
            { type: "p", content: "Абзац текста" },
            { type: "ul", items: ["Пункт 1", "Пункт 2"] }
        ]
    },

    grammar: {
        title: " notes",
        blocks: [
            { type: "h2", content: "Grammar basics" },
            { type: "p", content: "Тут будет грамматика..." }
        ]
    },

    vocabulary: {
        title: "Vocabulary notes",
        blocks: [
            { type: "h2", content: "Vocabulary" },
            { type: "p", content: "Слова, фразы, идиомы..." }
        ]
    }
};
