import React, { Children } from 'react';
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

const CategoryForm = (props) => {
    const classes = useStyles();
    const { categories, defaultValue, onChange } = props;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
                style={{color: "white"}}
                defaultValue={defaultValue || -1} // any category
                labelId="demo-simple-select-label"
                id="category"
                value={Children.value}
                onChange={onChange}
                name="category"
            >
                <MenuItem value={-1}>Mixed</MenuItem>
                {categories.map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default CategoryForm;