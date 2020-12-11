import React, { Children } from 'react';
import AppButton from './AppButton';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Select, InputLabel, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    props: {
      fieldset: {
        FormControl: 'secondary',
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240//120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const WelcomeDisplay = (props) => {
    const classes = useStyles();
    const { clickHandler, categories } = props;

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
            <h6>You may optionally customize any of the following!</h6>
            <FormControl component="fieldset">
                <FormLabel component="legend">Difficulty</FormLabel>
                <RadioGroup defaultValue="any" row aria-label="gender" name="gender1" value={Children.value} onChange={() => alert("This feature is not supported yet :(")}>
                    <FormControlLabel value="any" control={<Radio />} label="Any" />
                    <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="hard" control={<Radio />} label="Hard" />
                </RadioGroup>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  defaultValue={-1} // any category
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Children.value}
                  onChange={() => alert("This feature is not supported yet :(")}
                >
                  <MenuItem value={-1}>Any</MenuItem>
                  {categories.map(c => <MenuItem value={c.id}>{c.name}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label"># of Questions</InputLabel>
              <Select
                defaultValue={10}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Children.value}
                onChange={() => alert("This feature is not supported yet :(")}
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