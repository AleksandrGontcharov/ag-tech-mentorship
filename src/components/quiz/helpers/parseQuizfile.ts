import fs from 'fs';
import toml from 'toml';

interface QuizQuestion {
    question_type: 'single_choice' | 'multi_choice';
    question: string;
    options: string[];
    answer: number[] | number;
    explanations: string[];
    points: number;
}

interface Quiz {
    title: string;
    points: number;
    questions: QuizQuestion[];
}

function parseQuizFile(filename: string): Quiz {
    // Read the TOML file
    const tomlData: string = fs.readFileSync(filename, 'utf8');

    // Parse the TOML data into a JavaScript object
    const quizData: any = toml.parse(tomlData);

    // Convert the quiz data into a Quiz object
    const quiz: Quiz = {
        title: quizData.quiz.title,
        points: quizData.quiz.points,
        questions: quizData.quiz.questions.map((questionData: any) => ({
            question_type: questionData.question_type,
            question: questionData.question,
            options: questionData.options,
            answer: questionData.answer,
            explanations: questionData.explanations,
            points: questionData.points,
        })),
    };
    // Return the parsed quiz data
    return quiz;
}

export { parseQuizFile };
