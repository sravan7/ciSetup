import React, {useState} from "react";
import { Button } from '@material-ui/core';

function CustomButton(props){
    console.log({...props})
    return(
        <div className="loginControls">
            <Button {...props}>{props.type}</Button>
        </div>
    );
}

export default CustomButton;