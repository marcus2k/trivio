import React, { Children } from 'react';
import formStyles from './assets/formStyles';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

const shortForm = cat => cat.includes(":") ? cat.split(": ")[1] : cat;

const CategoryForm = (props) => {
    const classes = formStyles.useStyles();
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
                <MenuItem value={-1}><em>Mixed</em></MenuItem>
                {categories
                .map(c => ({id: c.id, name: shortForm(c.name)}))
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default CategoryForm;