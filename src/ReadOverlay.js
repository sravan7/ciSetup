import React, { useState } from "react";
import MailAddress from "./Address"
import ReadAddress from "./ReadAddress";
import {sendThisMail} from "./API"
function ReadOverlay(props) {
    console.log(props)
    const [toMails, setToMails] = useState(props.mailData.to)
    const [ccMails, setCcMails] = useState(props.mailData.cc);
    const [subject, setSubject]=useState(props.mailData.subject);
    const [body,setBody] = useState(props.mailData.body);
    const [fromMail, setFromMail]=useState([props.mailData.fromMail]);
    const handleClose = (e) => {
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        props.handleClose();
    }
    return (
        <div className="app-overlay" onClick={handleClose}>
            <div className="overlay-content">
                <div className="popup-box" onClick={(e) => { e.stopPropagation(); }}>
                    <ReadAddress type="to" mails={toMails} />
                    <ReadAddress type="cc"   mails={ccMails} />

                    <div className="popup-to-wrapper" >
                        <div className="role-section">sub:</div>
                        <div className="popup-from">
                            <input disabled id="popup-subject" className="textarea-to" value={subject} />
                        </div>
                    </div>
                    <div className="popup-body" id="body-wrapper">
                    <textarea disabled id="popup-body" className="textarea-to" value={body} > </textarea>

                    </div>
                    <div className="popup-from-handle">
                        <button className="close" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadOverlay;