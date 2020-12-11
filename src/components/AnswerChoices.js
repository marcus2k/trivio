import React from 'react';
import AppButton from './AppButton';
import { Grid } from '@material-ui/core';
import './assets/css/AnswerChoices.css';

const shuffle = (incorrect, correct) => {
    const lst = incorrect.concat(correct).sort(() => Math.random() - 0.5);
    console.log(lst);
    return lst;
}

const AnswerChoices = (props) => {
    const { correct, incorrect, clickHandler } = props;
    const shuffledAnswers = shuffle(incorrect, correct);
    return (
        <Grid
        container
        direction="row"
        justify="space-around"
        flex-wrap="wrap"
        align-items="stretch"
        >
            {shuffledAnswers.map(ans => 
                <div key={ans} className="choice">
                    <AppButton
                        onClick={clickHandler}
                        value={Number(correct===ans)}
                        text={window.decodeURIComponent(ans)}
                    />
                </div>
            )}
        </Grid>
    )
}

export default AnswerChoices;