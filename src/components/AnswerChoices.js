import React from 'react';
import AppButton from './AppButton';
import { Grid } from '@material-ui/core';

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
                <div style={{width:"50vw", margin: "2%"}}>
                    <AppButton
                    value={correct === ans} 
                    onClick={clickHandler}
                    text={window.atob(ans)}
                    />
                </div>
            )}
        </Grid>
    )
}

export default AnswerChoices;