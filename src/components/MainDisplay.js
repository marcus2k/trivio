import React from 'react';
import { Button } from '@material-ui/core';
import QuestionDisplay from './QuestionDisplay';
import CompletedDisplay from './CompletedDisplay';

const MainDisplay = (props) => {
    const { questionData, clickHandler } = props;

    if (!questionData) {
        return (
            <>
                <h1>
                    Welcome to <br /> 
                        <span style={{fontFamily:"monospace"}}>
                            TrivIO
                        </span>
                    !
                </h1>
                <Button 
                size="large" 
                variant="contained" 
                color="secondary"
                onClick={clickHandler}
                value={0}
                >
                Take a Trivia Quiz
                </Button>
            </>
        );
    }
    console.log(questionData);
    //return null;
    return <QuestionDisplay questionData={questionData} clickHandler={clickHandler} />
}

export default MainDisplay;