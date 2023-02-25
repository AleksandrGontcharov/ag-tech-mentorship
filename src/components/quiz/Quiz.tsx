import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { QuizType, parseTomlString } from "./helpers/parseQuizfile"; // Assuming you have defined QuizQuestionType type in a separate file.
import { QuizQuestion } from "./QuizQuestion";


export default function Quiz(filename: string) {
  // for now just load the quiz az a string
  const tomlData = `[quiz]
    title = "Sample Quiz"
    points = 10
  
    [[quiz.questions]]
    question_index = 0
    question_type = "single_choice"
    question = "What is the capital of France?"
    options = ["Paris", "London", "Madrid", "Berlin"]
    answer = 0
    explanations = ["Correct!", "Incorrect", "Incorrect", "Incorrect"]
    points = 5
  
    [[quiz.questions]]
    question_index = 1
    question_type = "single_choice"
    question = "What is the highest mountain in the world?"
    options = ["K2", "Denali", "Mount Everest", "Kilimanjaro"]
    answer = 2
    explanations = ["Incorrect", "Incorrect", "Correct!", "Incorrect"]
    points = 5
  
    [[quiz.questions]]
    question_index = 2
    question_type = "multi_choice"
    question = "Which of the following are countries in South America?"
    options = ["Brazil", "Russia", "Peru", "India", "China", "Chile"]
    answer = [0, 2, 5]
    explanations = ["Brazil is in South America", "Peru is in South America", "Chile is in South America", "India is not in South America", "China is not in South America", "Russia is not in South America"]
    points = 10`;

  const quiz: QuizType = parseTomlString(tomlData);

  const methods = useForm({
    defaultValues: {
      0: '',
      1: '',
      2: ''
    }
  });

  const onSubmit = (data: any) => {

    const transformedArray = Object.values(data).map((element: string | string[]) => {
      if (typeof element === "string") {
        return parseInt(element, 10);
      } else {
        return element.map((nestedElement) => parseInt(nestedElement, 10));
      }
    });

    console.table(transformedArray);
    console.table(quiz.answers);

    const arraysAreEqual = transformedArray.every((element, index) => element === quiz.answers[index]);


    if (arraysAreEqual) {
      console.log("correct")
    }
    else {
      console.log("incorrect")
    }
  };

  const initialUserAnswers: number[][] = Array(quiz.answers.length).fill(0).map(() => []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2> Quiztitle: {quiz.title} </h2>
        {quiz.questions.map(quizQuestion => (
          <QuizQuestion key={quizQuestion.question_index} quizQuestion={quizQuestion} />
        ))}
        <button type="submit">Submit Answers</button>
      </form>
    </FormProvider>
  );
}