import React from 'react';
import { Button } from '@material-ui/core';

const WelcomeDisplay = (props) => {
    const { clickHandler } = props;

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

export default WelcomeDisplay;