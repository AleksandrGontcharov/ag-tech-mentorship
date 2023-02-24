import React from "react";
import { QuizQuestionType } from "./helpers/parseQuizfile";
import { QuizQuestionOption } from "./QuizQuestionOption";

export function QuizQuestion(quizQuestion: QuizQuestionType) {
    let options = quizQuestion.options;
    let questionType = quizQuestion.question_type;
    return (
        <div key={JSON.stringify(quizQuestion.options)}>
            <h3> Question {quizQuestion.question_index} : {quizQuestion.question} </h3>
            {options.map(option => (
                QuizQuestionOption(option, questionType)
            ))}
        </div>
    );
}