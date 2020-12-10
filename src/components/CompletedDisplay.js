import React from 'react';
import { Button } from '@material-ui/core';

const CompletedDisplay = (props) => {
    const { answers, clickHandler } = props;
    return (
        <>
          <header className="App-header">
            <h1>
              Completed<br />
              You scored {answers.map(b => b ? 1 : 0).reduce((a, b) => a + b, 0)} out of {answers.length - 2}!
            </h1>
            <Button 
            onClick={clickHandler}
            value={0}
            size="large" 
            variant="contained" 
            color="secondary"
            >
            Try Again
            </Button>
          </header>
        </>
)};

export default CompletedDisplay;