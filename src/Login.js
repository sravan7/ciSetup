import React, {useState, useEffect} from 'react'
import {createUsers, createMessages, createToBox} from './localStorage'; 
import Input from "./Input";
import CustomButton from "./CustomButton";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {postLogin} from "./API"
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
const createDb= ()=>{
    if(!window.indexedDB){
        console.error("browser is not supported")
    }
    else {
        createUsers();
        createMessages()
        createToBox();
        console.log("all success")
    }
}

function Login(props){
    const [error,setError] = useState({isError:false, value:""})
    if(!window.localStorage.getItem("dataCreated")){
        createUsers();
        createMessages()
        createToBox();
    }
    const formElements = ["email", "password"]
    const handleSubmit = (e)=>{
                e.preventDefault();
                let formData = {};
                formElements.map((value)=>{
                    let formField = document.getElementById("login-"+value)
                    formData[value]=formField.value;
                })
            console.log(formData);
           const result = postLogin(formData);
           if(result.isError==true){
               setError(result);
           }
           else {
               props.handleLogin(result);
           }

    } 
    return (
        <div className="App-login"> 
            <form  action='none' onSubmit={handleSubmit}> 
                <MuiThemeProvider theme={theme}>
                 <div className="login-header">Sign In</div>
                 {
                     formElements.map((value)=>{
                      return  <Input id={"login-"+value}  required={true} type={value} name={value} autoFocus={value=="email"?true:false} label={value} color={"primary"} variant="outlined"  fullWidth={true} />   
                     })
                 }
                {/* <Input  required={true} type="email" name="email" autoFocus={true} label="Email" color="primary" fullWidth={true} />
                <Input required={true} type="password" name="password" label="Password" color="primary" fullWidth={true}  /> */}
                <CustomButton variant="outlined" color="secondary" size="medium" variant="contained" fullWidth={true} type="submit" value="Sign In" className="custom-button" />
                  {error.isError?<div className="login-error"> {error.value} </div> : null }
                </MuiThemeProvider>
           
            </form>   
        </div>
    );

};

export default Login;