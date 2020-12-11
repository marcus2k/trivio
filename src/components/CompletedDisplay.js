import React from 'react';
import AppButton from './AppButton';

const CompletedDisplay = (props) => {
    const { answers, clickHandler } = props;
    return (
        <>
          <header className="App-header">
            <h1>
              Completed<br />
              You scored {answers.map(b => b ? 1 : 0).reduce((a, b) => a + b, 0)} out of {answers.length - 2}!
            </h1>
            <AppButton
            onClick={clickHandler}
            value={0}
            text="Return to Home"
            />
          </header>
        </>
)};

export default CompletedDisplay;