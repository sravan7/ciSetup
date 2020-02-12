import React, {useState} from "react";
import Input from "./Input"
// import MenuIcon from "@material-ui/icons/Menu"
// import './Header.css';
// import './App.css';

function Header(props){
    const toggleExtraMenu =()=>{
        document.querySelector(".app-bar").classList.toggle("app-bar-shrink");
        document.querySelector(".extras-side-menu").classList.toggle("side-menu-push")
        document.querySelector(".app-content").classList.toggle("app-content-shrink")

    }
    return (
        <div className="app-bar">
            
            <div className="menu-icon" onClick={toggleExtraMenu}>  </div>
            <div className="app-search"> 
                <input id="menuIcon" type="text" name="text" placeholder="Search"/>
            </div>
            <div className="inbox-count"> <span className="inbox-count-num"> {props.unreadCount} </span></div>
            <div className="notification"> </div>
            <div className="app-logout" onClick={props.handleLogout}> </div>


        </div>
    )
}

export default Header;