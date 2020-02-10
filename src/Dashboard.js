import React, {useState, useEffect} from "react";
import Header from "./Header";
import Menu from "./Menu";
import ExtrasSideMenu from "./ExtrasSideMenu"
import MailBox from "./MailBox"
function Dashboard(props){

    return (
        <div className="dashboard">
            <Header />
            <ExtrasSideMenu />
            <Menu />
            <MailBox />
        </div>
    )
}

export default Dashboard;