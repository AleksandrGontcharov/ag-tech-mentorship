import React from "react"
import { QuestionType } from "./helpers/parseQuizfile"

export function QuizQuestionOption(props: { option: string, questionType: QuestionType }) {
    if (props.questionType === QuestionType.SingleChoice) {
        return (
            <div key={props.option}>
                <label key={props.option}>
                    <input type="radio" value="option1" key={props.option} />
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