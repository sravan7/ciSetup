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
    return (
        <div className="dashboard">
            <ExtrasSideMenu />
            <Header handleLogout={props.handleLogout} />
            <div className="app-content">
                <Menu handleCompose={handleCompose}/>
                <MailBox handleReadPopup={handleReadPopup} type="inbox" user={props.userData.email} />
            </div>
            {
              popup?<Overlay type={"compose"} handleClose={handleCompose} fullName={props.userData.fullName} user={props.userData.email} />:null
            }
            {
                readPopup?<ReadOverlay type={"inbox"} handleClose={handleReadPopup} mailData={mailData} />:null
            }
        </div>
    )
}

export default Dashboard;