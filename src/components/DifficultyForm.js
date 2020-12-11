import React, { Children } from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Select, InputLabel, MenuItem } from '@material-ui/core';

const DifficultyForm = (props) => {
        
    const { defaultValue, onChange } = props;

    return(
        <FormControl component="fieldset">
            <FormLabel component="legend">Difficulty</FormLabel>
            <RadioGroup 
            id="difficulty" 
            defaultValue={defaultValue || "any"} 
            row aria-label="difficulty" 
            name="difficulty" 
            value={Children.value}
            onChange={onChange}
            style={{justifyContent: "center"}}
            >
                <FormControlLabel value="any" control={<Radio />} label="Mixed" />
                <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
        </FormControl>
    )
}

export default DifficultyForm;