import React, { useState } from "react";
import { QuizQuestion, Quiz, parseTomlString } from "./helpers/parseQuizfile"; // Assuming you have defined QuizQuestion type in a separate file.


export default function QuizQuestionComponent(filename: string) {

    // for now just load the quiz az a string
    const tomlData = `[quiz]
    title = "Sample Quiz"
    points = 10
  
    [[quiz.questions]]
    question_type = "single_choice"
    question = "What is the capital of France?"
    options = ["Paris", "London", "Madrid", "Berlin"]
    answer = "Paris"
    explanations = ["Correct!", "Incorrect", "Incorrect", "Incorrect"]
    points = 5
  
    [[quiz.questions]]
    question_type = "single_choice"
    question = "What is the highest mountain in the world?"
    options = ["K2", "Denali", "Mount Everest", "Kilimanjaro"]
    answer = "Mount Everest"
    explanations = ["Incorrect", "Incorrect", "Correct!", "Incorrect"]
    points = 5
  
    [[quiz.questions]]
    question_type = "multi_choice"
    question = "Which of the following are countries in South America?"
    options = ["Brazil", "Russia", "Peru", "India", "China", "Chile"]
    answer = [0, 2, 5]
    explanations = ["Brazil is in South America", "Peru is in South America", "Chile is in South America", "India is not in South America", "China is not in South America", "Russia is not in South America"]
    points = 10`;

    const quiz: Quiz = parseTomlString(tomlData);

    const [answers, setAnswers] = useState<number[]>([]);

    function handleAnswerChange(questionIndex: number, answerIndex: number | number[]): void {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answerIndex as number;
        setAnswers(newAnswers);
    }

    function renderOption(option: string, index: number, questionIndex: number, question: QuizQuestion): JSX.Element {
        const { question_type } = question;
        const isChecked = answers[questionIndex] === index;
        return (
            <div key={index}>
                <input type={question_type === "single_choice" ? "radio" : "checkbox"} value={index} checked={isChecked} onChange={() => handleAnswerChange(questionIndex, index)} />
                <label>{option}</label>
            </div>
        );
    }

    function renderQuestion(question: QuizQuestion, index: number): JSX.Element {
        const { question_type, question: questionText, options, explanations } = question;
        const answer = Array.isArray(question.answer) ? question.answer : [question.answer];
        const answerIndex = question_type === "single_choice" ? answer[0] : answer;
        const answerExplanation = explanations[answerIndex] ?? "";

        return (
            <div key={index}>
                <p>{questionText}</p>
                {options.map((option, optionIndex) => renderOption(option, optionIndex, index, question))}
                <p>{answerExplanation}</p>
            </div>
        );
    }

    function calculateScore(): number {
        const totalPoints = quiz.questions.reduce((sum, question) => sum + question.points, 0);
        const earnedPoints = quiz.questions.reduce((sum, question, index) => {
            const isCorrect = Array.isArray(question.answer)
                ? question.answer.sort().join("") === answers[index]?.toString().split(",").sort().join("")
                : question.answer === answers[index];
            return sum + (isCorrect ? question.points : 0);
        }, 0);

        return (earnedPoints / totalPoints) * 100;
    }

    return (
        <div>
            <h2>{quiz.title}</h2>
            {quiz.questions.map(renderQuestion)}
            <button onClick={() => alert(`Your score: ${calculateScore()}%`)}>Submit</button>
        </div>
    );
}