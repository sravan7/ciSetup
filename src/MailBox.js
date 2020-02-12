import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import MailCard from "./MailCard";
import {getMails,deleteMails,updateReadList} from "./API"
function MailBox(props){
    const [type, setType]=useState("inbox")
    const [mails,setMails] = useState(getMails(type, props.user));
    const updateUnread = ()=>{
        props.updateUnreadCount(mails.filter(val=>val.unread.includes(props.user)).length)
    }
    updateUnread();
    if(type!==props.type){
        setMails(getMails(props.type, props.user))
        updateUnread()
        setType(props.type)
    }
    const unread = [];
    const handleReadPopup = (data)=>{
        if(data){
            if(data.unread.includes(props.user)){
                updateReadList(data.mid,props.user)
                console.log("soudnot")
                setMails(getMails(props.type, props.user))
                updateUnread()
            }
        }
        props.handleReadPopup(data)
    }
    const handleDelete =()=>{
        let deleteIds = Array.from(document.getElementsByName("delete")).filter(elem=>elem.checked).map(elem=>elem.value)
        deleteMails(deleteIds);
        setMails(getMails(props.type, props.user))
        updateUnread()

    }

return (
    <div className="app-section"> 
        <div className="mail-header"> 
                <div className="mail-header-helper"> 
                    <div className="read-count">{props.type}({mails.length})</div>
                    <div className="inbox-search">
                        <input className="search-field" />
                        <button className="search-button">Search</button>
                    </div>
                </div>
                <div className="mail-header-tools"> 
                    <div className="mail-header-tool-section mail-header-tool"> 
                        <img src="%PUBLIC_URL%/sync-24px.svg" className="mail-header-tool-refresh" /> 
                        <img src="%PUBLIC_URL%/remove_red_eye-24px.svg" className="mail-header-tool-eye" />
                        <img src="%PUBLIC_URL%/warning-24px.svg" className="mail-header-tool-warning" />
                        <img src="%PUBLIC_URL%/delete-24px.svg" className="mail-header-tool-delete" onClick={handleDelete} /> 
                     </div>
                    <div className="mail-header-tool-nav mail-header-tool"> 
                        <img src="%PUBLIC_URL%/arrow_back-24px.svg" className="mail-header-tool-back" /> 
                        <img  src="%PUBLIC_URL%/arrow_back-24px.svg" className="mail-header-tool-fwd"/> 
                    </div>
                </div>

        </div>
        <ul className="mail-list">
                    {
                        mails?
                        mails.map((mail)=>{
                            return (<MailCard key={mail.mid} user={props.user} type={props.type} content={mail} handleReadPopup={handleReadPopup} />) 
                        }):<div>ohoo this space is empty </div>
                    }
        </ul>
    </div>
)
}

export default MailBox;