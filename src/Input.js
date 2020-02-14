import React, {UseState, useCallback, useEffect} from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import {MDCTextField }from '@material-ui/textfield';
// import {MDCTextField} from '@material/textfield';
import { FormControlLabel, TextField, Box } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00b494',
          },
          secondary: {
            main: '#4caf50',
          },
    },
  });

function Input({...props}){
    return (
        <div className="loginControls">
            <MuiThemeProvider theme={theme} >
                <TextField  {...props}   />
            </MuiThemeProvider>
        </div>
    ) ;
};

export default Input;
