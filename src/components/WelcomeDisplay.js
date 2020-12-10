import React from 'react';
import AppButton from './AppButton';

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
            <AppButton
            onClick={clickHandler}
            value={0}
            text="Take a Trivia Quiz"
            />
        </>
    );
}

export default WelcomeDisplay;