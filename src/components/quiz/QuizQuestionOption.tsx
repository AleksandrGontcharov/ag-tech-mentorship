import React from "react"
import { QuestionType, QuizQuestionType } from "./helpers/parseQuizfile"

export function QuizQuestionOption(props: { option: string, questionType: QuestionType, quizQuestion: QuizQuestionType }) {
    if (props.questionType === QuestionType.SingleChoice) {
        return (
            <div key={props.option}>
                <label key={props.option}>
                    <input type="radio" value={props.option} key={props.option} name={JSON.stringify(props.quizQuestion)} />
                    {props.option}
                </label>
            </div>
        )
    } else if (props.questionType === QuestionType.MultiChoice) {
        return (
            <div key={props.option}>
                <label key={props.option}>
                    <input type="checkbox" />
                    {props.option}
                </label>
            </div >
        )
    } else {
        return (
            <h4 key={props.option}> "ERROR" + {props.option}</h4>
        )
    }
}