import React, { Children } from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const NumberOfQuestionsForm = (props) => {
    const classes = useStyles();
    const { defaultValue, onChange } = props;
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label"># of Questions</InputLabel>
            <Select
                style={{color: "white"}}
                defaultValue={defaultValue || 10}
                labelId="demo-simple-select-label"
                id="numQuestions"
                value={Children.value}
                onChange={onChange}
                name="numQuestions"
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
            </Select>
        </FormControl>
    )
}

export default NumberOfQuestionsForm;