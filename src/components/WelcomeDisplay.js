import React, { Children } from 'react';
import AppButton from './AppButton';
import DifficultyForm from './DifficultyForm';
import CategoryForm from './CategoryForm';
import NumberOfQuestionsForm from './NumberOfQuestionsForm';
import { makeStyles } from '@material-ui/core/styles';

const WelcomeDisplay = (props) => {
    const { clickHandler, categories, numOfQuestionsHandler, categoryHandler, difficultyHandler, settings } = props;

    return (
        <>
            <h1>
                Welcome to <br /> 
                    <span style={{fontFamily:"monospace"}}>
                        TrivIO!
                    </span>
            </h1>
            <AppButton
            onClick={clickHandler}
            value={0}
            text="Take a Trivia Quiz"
            />
            <h6>You may customize any of the following!</h6>
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