import toml from 'toml';

// export type QuestionType = 'single_choice' | 'multi_choice';

export enum QuestionType {
    SingleChoice = 'single_choice',
    MultiChoice = 'multi_choice',
}

export type QuizQuestionType = {
    question_type: QuestionType;
    question_index: number;
    question: string;
    options: string[];
    answer: number[];
    explanations: string[];
    points: number;
}

export type QuizType = {
    title: string;
    points: number;
    questions: QuizQuestionType[];
    answers: (number | number[])[];
}

export function parseTomlString(tomlData: string): QuizType {
    // Parse the TOML data into a JavaScript object
    const quizData: any = toml.parse(tomlData);

    // Convert the quiz data into a QuizType object
    const quiz: QuizType = {
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
            question_index: questionData.question_index
        })),
    };
    // Return the parsed quiz data
    return quiz;
}
