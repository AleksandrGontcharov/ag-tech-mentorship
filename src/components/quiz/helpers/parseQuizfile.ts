import toml from 'toml';

export interface QuizQuestion {
    question_type: 'single_choice' | 'multi_choice';
    question: string;
    options: string[];
    answer: number[];
    explanations: string[];
    points: number;
}

export interface Quiz {
    title: string;
    points: number;
    questions: QuizQuestion[];
    answers: number[][];
}

export function parseTomlString(tomlData: string): Quiz {
    // Parse the TOML data into a JavaScript object
    const quizData: any = toml.parse(tomlData);

    // Convert the quiz data into a Quiz object
    const quiz: Quiz = {
        title: quizData.quiz.title,
        points: quizData.quiz.points,
        answers: quizData.quiz.questions.map((question) => question.answer),
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
