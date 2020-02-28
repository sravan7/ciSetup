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
    const [checked, setCheckbox]=useState(false);
    const handleChange = (e)=>{
    if(e.stopPropagation)e.stopPropagation();
    console.log(e.target.checked)
    setCheckbox(!checked)
  } 
  
    return (
    <li className={props.content.unread.includes(props.user)&&props.type==="inbox"?"unreadMail mail-item ":"mail-item"} key={content.mid} >
      <MuiThemeProvider theme={theme}>  <Checkbox type="checkbox" className="mail-item-checkbox" name="delete" checked={checked} onChange={handleChange}  size="small" value={content.mid} color="primary" /> </MuiThemeProvider> 
      <div className="mail-item-group" onClick={(e)=>{props.handleReadPopup(props.content);}}>
        <div className="mail-item-fname"> {content.fullName} </div>
        <div className="mail-item-subject"> {content.subject} </div>
        <div className="mail-item-date"> { new Date(content.date).toLocaleString()} </div>
      </div>
     </li>  
    )
}


export default MailCard;