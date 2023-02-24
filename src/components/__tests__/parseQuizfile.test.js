import fs from 'fs';
import { parseTomlString } from '../quiz/helpers/parseQuizfile';

describe('parseQuizFile', () => {
    test('parses a quiz file with a single question', () => {
        let filename = 'src/components/quiz/quiz_questions/samplequiz.toml';
        const tomlFile = fs.readFileSync(filename, 'utf8');

        const quiz = parseTomlString(tomlFile);

        expect(quiz.title).toBe('Sample Quiz');
        expect(quiz.points).toBe(10);
        expect(quiz.questions).toHaveLength(3);
        expect(quiz.questions[0].question_type).toBe('single_choice');
        expect(quiz.questions[0].question).toBe('What is the capital of France?');
        expect(quiz.questions[0].options).toEqual(['Paris', 'London', 'Madrid', 'Berlin']);
        expect(quiz.questions[0].answer).toEqual([0]);
        expect(quiz.questions[0].explanations).toEqual([
            'Correct!',
            'Incorrect',
            'Incorrect',
            'Incorrect',
        ]);
        expect(quiz.questions[0].points).toBe(5);

        expect(quiz.questions[1].question_type).toBe('single_choice');
        expect(quiz.questions[1].question).toBe('What is the highest mountain in the world?');
        expect(quiz.questions[1].options).toEqual(['K2', 'Denali', 'Mount Everest', 'Kilimanjaro']);
        expect(quiz.questions[1].answer).toEqual([2]);
        expect(quiz.questions[1].explanations).toEqual([
            'Incorrect',
            'Incorrect',
            'Correct!',
            'Incorrect',
        ]);
        expect(quiz.questions[1].points).toBe(5);

        expect(quiz.questions[2].question_type).toBe('multi_choice');

        expect(quiz.questions[2].answer).toEqual([0, 2, 5]);
    });
});
