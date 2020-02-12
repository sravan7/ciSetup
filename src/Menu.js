import React,{useState} from "react";

function Menu(props){
    return (
        <div  className="menu"> 
            <div  className="menu-content"> 
                <button className="mail-compose-button" onClick={props.handleCompose}> Compose Mail</button>
                <div className="menu-folders">Folders</div>
                <div className="menu-categories">Catergories</div>
                <div className="menu-labels">Labels</div>
            </div>
         </div>
    )
}

export default Menu;