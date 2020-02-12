import React, {useState, useEffect} from "react";
import Header from "./Header";
import Menu from "./Menu";
import ExtrasSideMenu from "./ExtrasSideMenu"
import MailBox from "./MailBox"
import Overlay from "./Overlay";
import ReadOverlay from "./ReadOverlay";
function Dashboard(props){
    const [popup, setPopup] =useState(false);
    const [readPopup,setreadPopup] = useState(false);
    const [mailData,setMailData]=useState({});
    const [mailboxType,setMailboxType]=useState("inbox");
    const [unreadCount,setunreadCount]=useState(0);
    const handleReadPopup = (data)=>{
        console.log(data)
        if(data)
            setMailData(data)
        console.log(mailData)
        setreadPopup(!readPopup)
    }
    const handleCompose = ()=>{
        setPopup(!popup)
    }
    const handleMailboxType=(data)=>{
        if(data!==mailboxType){
            setMailboxType(data);
        }
    }
    const updateUnreadCount = (val)=>{
        setunreadCount(val)
    };
    return (
        <div className="dashboard">
            <ExtrasSideMenu />
            <Header handleLogout={props.handleLogout} unreadCount={unreadCount} />
            <div className="app-content">
                <Menu handleCompose={handleCompose} mailboxType={mailboxType} handleMailboxType={handleMailboxType} inboxCount={0} outboxCount={0} />
                <MailBox updateUnreadCount={updateUnreadCount} handleReadPopup={handleReadPopup} type={mailboxType} user={props.userData.email} />
            </div>
            {
              popup?<Overlay type={"compose"} handleClose={handleCompose} fullName={props.userData.fullName} user={props.userData.email} />:null
            }
            {
                readPopup?<ReadOverlay type={mailboxType} handleClose={handleReadPopup} mailData={mailData} />:null
            }
        </div>
    )
}

export default Dashboard;