import React, { Children } from 'react';
import formStyles from './assets/formStyles';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

const CategoryForm = (props) => {
    const classes = formStyles.useStyles();
    const { categories, defaultValue, onChange } = props;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
                className={classes.selectEmpty}
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