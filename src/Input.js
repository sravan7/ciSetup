import React, {UseState, useCallback, useEffect} from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import {MDCTextField }from '@material-ui/textfield';
// import {MDCTextField} from '@material/textfield';
import { FormControlLabel, TextField, Box } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1b5e20',
          },
          secondary: {
            main: '#4caf50',
          },
    },
  });

function Input({...props}){
    // const primary = "#1b5e20"; // #F44336
    // const secondary = "#4caf50"
    console.log(props)
    useEffect(()=>{
        // const textField = new MDCTextField(document.querySelector('.mdc-text-field__input'));
    },[])
    // const textField = new MDCTextField()
    return (
        <div className="loginControls">
            <MuiThemeProvider theme={theme} >
                <TextField  {...props}   />
            </MuiThemeProvider>
        </div>
    ) ;
};

export default Input;
