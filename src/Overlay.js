import React, { useState } from "react";
import MailAddress from "./Address"
import {sendThisMail} from "./API"
function Overlay(props) {
    const [toMails, setToMails] = useState([])
    const [ccMails, setCcMails] = useState([]);
    const [subject, setSubject]=useState();
    const [body,setBody] = useState();
    const handleClose = (e) => {
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        props.handleClose();
    }
    const handleSend = ()=>{
        if(toMails.length){
        let bodyContent = body;
        let subjectContent = subject;
        let mid =(Math.random()*8).toString(16).replace(".","") ;
        let mailContent ={ mid:mid, date: new Date().toGMTString(), subject : subjectContent, body: bodyContent,fullName : props.fullName, fromMail : props.user, to: toMails,cc:ccMails,unread:[...toMails,...ccMails]}
        console.log(mailContent)
        if(sendThisMail(mailContent)){
            handleClose();
        }
    }
        

}
   
    const handleRemove = (type, mail) => {
        console.log(type, mail)
        if (type === "to") {
            setToMails(toMails.filter(val => val !== mail));
        }
        if (type === "cc") {
            setCcMails(ccMails.filter(val => val !== mail));
        }
    }
    const handleAccept = (type, mail) => {
        if (type === "to") {
            console.log(mail)
            setToMails([...toMails, mail])
        }
        if (type === "cc") {
            setCcMails([...ccMails, mail])
        }
    }
    const handleChange = (e)=>{

        if(e.target.id==="popup-body"){
            setBody(e.target.value);
        }
        else if(e.target.id==="popup-subject"){
            setSubject(e.target.value)
        }
    }
    return (
        <div className="app-overlay" onClick={handleClose}>
            <div className="overlay-content">
                <div className="popup-box" onClick={(e) => { e.stopPropagation(); }}>
                    {
                        props.type === "inbox" ?
                            <div className="popup-from">
                                From<div className="from" contentEditable>
                                </div >
                            </div> : null
                    }
                    <MailAddress type="to" handleRemove={handleRemove} handleAccept={handleAccept} mails={toMails} />
                    <MailAddress type="cc" handleRemove={handleRemove} handleAccept={handleAccept} mails={ccMails} />

                    <div className="popup-to-wrapper" >
                        <div className="role-section">sub:</div>
                        <div className="popup-to">
                            <input id="popup-subject" className="textarea-to" value={subject} onChange={(e)=>{handleChange(e)}} placeholder={"enter subject"} />
                        </div>
                    </div>
                    <div className="popup-body" id="body-wrapper">
                    <textarea id="popup-body" className="textarea-to" onChange={(e)=>{handleChange(e)}} value={body} defaultValue={""} />

                    </div>
                    <div className="popup-handle">
                        <button className="close" onClick={handleClose}>Close</button>
                        <button className="send" onClick={handleSend}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overlay;