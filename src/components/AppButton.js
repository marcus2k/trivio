import React from 'react';
import { Button } from '@material-ui/core';

const AppButton = (props) => {
    const { value, onClick, text } = props;
    return(
        <Button 
            size="large" 
            variant="contained" 
            color="secondary"
            onClick={onClick}
            value={value}
        >
        {text}
        </Button>
    );
};

export default AppButton;