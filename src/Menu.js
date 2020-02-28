import React,{useState} from "react";

function Menu(props){
    console.log(props)
    return (
        <div  className="menu"> 
            <div  className="menu-content"> 
                <button className="mail-compose-button" onClick={props.handleCompose}> Compose Mail</button>
                <div className="menu-folders">
                    Folders
                    <div className={props.mailboxType==="inbox"?"menu-inbox active inbox":"menu-inbox inbox"} onClick={()=>{props.handleMailboxType("inbox")}}> 
                        <span className="inbox-text"><img src={require("./img/inbox-24px.svg")} alt={"inbox icon"} /> Inbox </span>
                        <span className="menu-inbox-count">{props.inboxCount}</span> 
                    </div>
                    <div className={props.mailboxType==="sent"?"menu-inbox active sent":"menu-inbox sent"} onClick={()=>{props.handleMailboxType("sent")}} > 
                        <span className="inbox-text"> <img src={require("./img/mail-24px.svg")} alt={"sent message icon"} /> Outbox</span>
                        <span className="menu-inbox-count">{props.outboxCount}</span> 
                    </div>
                </div>
                <div className="menu-categories">Catergories</div>
                <div className="menu-labels">Labels</div>
            </div>
         </div>
    )
}

export default Menu;