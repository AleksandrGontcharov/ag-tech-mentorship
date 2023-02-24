import React from "react"
import { QuestionType } from "./helpers/parseQuizfile"

export function QuizQuestionOption(option: string, questionType: QuestionType) {
    if (questionType === QuestionType.SingleChoice) {
        return (
            <div key={option}>
                <label key={option}>
                    <input type="radio" value="option1" key={option} />
                    {option}
                </label>
            </div>
        )
    } else if (questionType === QuestionType.MultiChoice) {
        return (
            <div key={option}>
                <label key={option}>
                    <input type="checkbox" />
                    {option}
                </label>
            </div >
        )
    } else {
        return (
            <h4 key={option}> "ERROR" + {option}</h4>
        )
    }
}