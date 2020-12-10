import React from 'react';
import { Button, Grid } from '@material-ui/core';

const shuffle = (incorrect, correct) => {
    const lst = incorrect.concat(correct).sort(() => Math.random() - 0.5);
    console.log(lst);
    return lst;
}

const QuestionDisplay = (props) => {
    const { questionData, clickHandler } = props;

    const shuffledAnswers = shuffle(
        questionData.incorrect_answers, questionData.correct_answer);

    return (
        <>
            <h1>{window.atob(questionData.question)}</h1>
            <Grid
            container
            direction="row"
            justify="space-around"
            flex-wrap="wrap"
            align-items="stretch"
            >
            {shuffledAnswers.map(ans => 
                <div style={{width:"50vw", margin: "2%"}}>
                    <Button 
                    value={questionData.correct_answer === ans} 
                    size="large" 
                    variant="contained" 
                    color="secondary"
                    onClick={clickHandler}
                    >
                    {window.atob(ans)}
                    </Button>
                </div>
            )}
            </Grid>
        </>
    )
}

export default QuestionDisplay;