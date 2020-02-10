import React, {useState, useEffect} from "react";
import Header from "./Header";
import Menu from "./Menu";
import ExtrasSideMenu from "./ExtrasSideMenu"
import MailBox from "./MailBox"
function Dashboard(props){

    return (
        <div className="dashboard">
            <ExtrasSideMenu />
            <Header />
            <div className="app-content">
                <Menu />
                <MailBox />
            </div>
        
        </div>
    )
}

export default Dashboard;