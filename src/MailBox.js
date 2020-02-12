import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import MailCard from "./MailCard";
import {getMails} from "./API"
import {updateReadList} from "./API"
function MailBox(props){
    const [mails,setMails] = useState(getMails(props.type, props.user))
    const unread = [];
    const handleReadPopup = (data)=>{
        if(data){
            if(data.unread.includes(props.user)){
                updateReadList(data.mid,props.user)
                console.log("soudnot")
                setMails(getMails(props.type, props.user))
            }
        }
        props.handleReadPopup(data)
    }


return (
    <div className="app-section"> 
        <div className="mail-header"> 
                <div className="mail-header-helper"> 
                    <div className="read-count">{props.type}({unread.length})</div>
                    <div className="inbox-search">
                        <input className="search-field" />
                        <button className="search-button">Search</button>
                    </div>
                </div>
                <div className="mail-header-tools"> 
                    <div className="mail-header-tool-section mail-header-tool"> 
                        <img src="/sync-24px.svg" className="mail-header-tool-refresh" /> 
                        <img src="/remove_red_eye-24px.svg" className="mail-header-tool-eye" />
                        <img src="/warning-24px.svg" className="mail-header-tool-warning" />
                        <img src="/delete-24px.svg" className="mail-header-tool-delete" /> 
                     </div>
                    <div className="mail-header-tool-nav mail-header-tool"> 
                        <img src="/arrow_back-24px.svg" className="mail-header-tool-back" /> 
                        <img  src="/arrow_back-24px.svg" className="mail-header-tool-fwd"/> 
                    </div>
                </div>

        </div>
        <ul className="mail-list">
                    {
                        mails?
                        mails.map((mail)=>{
                            return (<MailCard key={mail.mid} user={props.user} type="inbox" content={mail} handleReadPopup={handleReadPopup} />) 
                        }):<div>ohoo this space is empty </div>
                    }
        </ul>
    </div>
)
}

export default MailBox;