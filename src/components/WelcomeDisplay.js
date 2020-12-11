import React, { Children } from 'react';
import AppButton from './AppButton';
import DifficultyForm from './DifficultyForm';
import CategoryForm from './CategoryForm';
import NumberOfQuestionsForm from './NumberOfQuestionsForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    props: {
      fieldset: {
        FormControl: 'secondary',
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const WelcomeDisplay = (props) => {
    const classes = useStyles();
    const { clickHandler, categories, settingsHandler, difficultyHandler, settings } = props;

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
            onChange={settingsHandler}
            categories={categories}
            />
            <NumberOfQuestionsForm
            defaultValue={settings.numQuestions}
            onChange={settingsHandler}
            />
        </>
    );
}

export default WelcomeDisplay;