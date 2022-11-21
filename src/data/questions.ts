export type QuestionType = {
    title: string;
    text: string;
    options: string[];
    correct: number;
    hint: string;
}

export const questions: QuestionType[] = [
    {
        title: 'Question 1',
        text: 'What is it?',
        options: [
            'A',
            'B'
        ],
        correct: 0,
        hint: 'try a'
    },
    {
        title: 'Question 2',
        text: 'Which number?',
        options: [
            'One',
            'Two',
            'Three'
        ],
        correct: 1,
        hint: 'try 2'
    },
    {
        title: 'Question 3',
        text: 'What color?',
        options: [
            'Blue',
            'Red',
            'Green'
        ],
        correct: 2,
        hint: 'try green'
    }
];
