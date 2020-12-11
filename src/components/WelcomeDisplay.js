import React from 'react';
import AppButton from './AppButton';
import DifficultyForm from './DifficultyForm';
import CategoryForm from './CategoryForm';
import NumberOfQuestionsForm from './NumberOfQuestionsForm';
import './assets/css/WelcomeDisplay.css';

const WelcomeDisplay = (props) => {
    const { clickHandler, categories, numOfQuestionsHandler, categoryHandler, difficultyHandler, settings } = props;

    return (
        <>
            <h1>
                Welcome to <br /> 
                    <span className="monospace">
                        TrivIO!
                    </span>
            </h1>
            <AppButton
            onClick={clickHandler}
            value={0}
            text="Take a Trivia Quiz"
            />
            <h5>by <a href="https://github.com/marcus2k" target="_blank" className="git-link">Marcus</a></h5>
            <DifficultyForm 
            defaultValue={settings.difficulty}
            onChange={difficultyHandler}
            />
            <CategoryForm
            defaultValue={settings.category}
            onChange={categoryHandler}
            categories={categories}
            />
            <NumberOfQuestionsForm
            defaultValue={settings.numQuestions}
            onChange={numOfQuestionsHandler}
            />
        </>
    );
}

export default WelcomeDisplay;