import React, {useState} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {postLogin} from "./API"
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
function MailCard(props){
    let {content} = props;
    console.log(props, content);
    return (
    <li className="mail-item" id={props.content.unread.includes(props.user)&&props.type==="inbox"?"unreadMail":""} key={content.mid} onClick={()=>{props.handleReadPopup(props.content)}}>
      <MuiThemeProvider theme={theme}>  <Checkbox className="mail-item-checkbox" checked={false} size="small" value={content.mid} color="primary" /> </MuiThemeProvider> 
        <div className="mail-item-fname"> {content.fullName} </div>
        <div className="mail-item-subject"> {content.subject} </div>
        <div className="mail-item-date"> { new Date(content.date).toLocaleString()} </div>
     </li>  
    )
}


export default MailCard;