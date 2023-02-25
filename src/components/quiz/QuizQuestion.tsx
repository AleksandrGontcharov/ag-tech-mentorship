import React from "react";
import { QuizQuestionType } from "./helpers/parseQuizfile";
import { QuizQuestionOption } from "./QuizQuestionOption";

export function QuizQuestion(props: { quizQuestion: QuizQuestionType }) {
    let options = props.quizQuestion.options;
    let questionType = props.quizQuestion.question_type;
    return (
        <div key={JSON.stringify(props.quizQuestion.options)}>
            <h3> Question {props.quizQuestion.question_index} : {props.quizQuestion.question} </h3>
            {options.map(option => (
                <QuizQuestionOption option={option} questionType={questionType} />
            ))}
        </div>
    );
}