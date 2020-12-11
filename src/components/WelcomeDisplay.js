import React, { Children } from 'react';
import AppButton from './AppButton';
import DifficultyForm from './DifficultyForm';
import CategoryForm from './CategoryForm';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

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
            <h6>You may optionally customize any of the following!</h6>
            <DifficultyForm 
            defaultValue={settings.difficulty}
            onChange={difficultyHandler}
            />
            <CategoryForm
            defaultValue={settings.category}
            onChange={settingsHandler}
            categories={categories}
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label"># of Questions</InputLabel>
              <Select
                style={{color: "white"}}
                defaultValue={settings.numQuestions || 10}
                labelId="demo-simple-select-label"
                id="numQuestions"
                value={Children.value}
                onChange={settingsHandler}
                name="numQuestions"
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
        </>
    );
}

export default WelcomeDisplay;