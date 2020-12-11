import React from 'react';
import AnswerChoices from './AnswerChoices';

const QuestionDisplay = (props) => {
    const { questionData, clickHandler } = props;

    return (
        <>
            <h1>{window.decodeURIComponent(questionData.question)}</h1>
            <AnswerChoices
            correct={questionData.correct_answer}
            incorrect={questionData.incorrect_answers}
            clickHandler={clickHandler}
            />
        </>
    )
}

export default QuestionDisplay;