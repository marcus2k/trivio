import React from 'react';
import AppButton from './AppButton';
import { Grid, Button } from '@material-ui/core';
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
                <div className="choice">
                    <Button 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        onClick={clickHandler}
                        value={Number(correct === ans)}
                        
                    >
                    {window.atob(ans)}
                    </Button>
                    {/*
                    <AppButton
                    value={correct === ans} 
                    onClick={clickHandler}
                    text={window.atob(ans)}
                    />*/}
                </div>
            )}
        </Grid>
    )
}

export default AnswerChoices;