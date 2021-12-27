import { QUESTION_ANSWER,CHANGE_QUIZ,SUBMIT,INIT_QUIZZES } from "./constants";

export function questionAnswer(index, answer) {
    return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function changeQuiz(index) {
    return { type: CHANGE_QUIZ, payload: { index } };
}

export function submit(quizzes) {
    return { type: SUBMIT, payload: { quizzes } };
}

export function initQuizzes(quizzes) {
    return { type: INIT_QUIZZES, payload: { quizzes } };
}