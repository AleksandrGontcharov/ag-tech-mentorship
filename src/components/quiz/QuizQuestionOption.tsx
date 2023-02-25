import React from "react"
import { useFormContext } from "react-hook-form";
import { QuestionType, QuizQuestionType } from "./helpers/parseQuizfile"

export function QuizQuestionOption(props: { option: string, questionType: QuestionType, quizQuestion: QuizQuestionType }) {
    const { register } = useFormContext();
    if (props.questionType === QuestionType.SingleChoice) {
        return (
            <div key={props.option}>
                <label key={props.option}>
                    <input type="radio" value={props.option} key={props.option} name={JSON.stringify(props.quizQuestion)} {...register(props.quizQuestion.question)} />
                    {props.option}
                </label>
            </div>
        )
    } else if (props.questionType === QuestionType.MultiChoice) {
        return (
            <div key={props.option}>
                <label key={props.option}>
                    <input type="checkbox" value={props.option} key={props.option} name={JSON.stringify(props.quizQuestion)} {...register(props.quizQuestion.question)} />
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