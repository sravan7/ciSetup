import React, {useState, useEffect} from 'react'

const createDb= ()=>{
    if(!window.indexedDB){
        console.error("browser is not supported")
    }
    else {
        // let db;
        let UsersData = [
            { email:"sravan@email.com", password : "1234", fullname : "sravan"},
            {email:"bala@email.com", password : "1234", fullname : "bala"},
            {email:"vishnu@email.com", password : "1234", fullname : "vishnu"},
            {email:"naidu@email.com", password : "1234", fullname : "naidu"}    
        ]
        let id1 =(Math.random()*16).toString(32).replace(".","") ;
        let id2 =(Math.random()*16).toString(32).replace(".","") ;
        let MessagesData = [
            { mid:id1 , date: new Date().toGMTString(), subject : "hello", body: "hi sravan from bala", fromMail : "bala@email.com"},
            {mid: id2,date: new Date().toGMTString(), subject : "hi",body: "hi sravan, bala from sravan", fromMail : "sravan@email.com"},
        ] 
        let ToData = [
            { mid: id1,toMail : "sravan@email.com"},
            {mid: id2, toMail : "sravan@email.com"},
            {mid: id2, toMail : "bala@email.com"},
        ] 
        let request = window.indexedDB.open("MailDB",1,(db)=>{
            if(!db.objectStoreNames.contains("Users")) {
                let objectStore = db.createObjectStore("Users", {keyPath: "email"})
                objectStore.createIndex("email","email", {unique: true});
             
                // objectStore.transaction.oncomplete = (ev) => {
                //     console.log("transaction", ev);
                //    let userStore= db.transaction("Users", "readwrite").objectStore("Users");
                //    UsersData.forEach(function (user){
                //        userStore.add(user);
                //    });
                // }
            }
                if(!db.objectStoreNames.contains("Messages")) {
                    let objectStore = db.createObjectStore("Messages", {keyPath: "mid"})
                    objectStore.createIndex("fromMail","fromMail", {unique: false});
                    objectStore.createIndex("mid","mid", {unique: true});
                 
                    // objectStore.transaction.oncomplete = (ev) => {
                    //     console.log("transaction", ev);
                    //    let messageStore= db.transaction("Messages", "readwrite").objectStore("Messages");
                    //    MessagesData.forEach(function (message){
                    //        messageStore.add(message);
                    //        console.log("mesages completed")
                    //    });
                    // }
                }
                if(!db.objectStoreNames.contains("ToBox")) {
                    let objectStore = db.createObjectStore("ToBox", {autoIncrement:true});
                    objectStore.createIndex("toMail","toMail", {unique: false});
                    objectStore.createIndex("mid","mid", {unique: false});
                 
                    // objectStore.transaction.oncomplete = (ev) => {
                    //     console.log("transaction", ev);
                    //    let messageStore= db.transaction("ToBox", "readwrite").objectStore("ToBox");
                    //    ToData.forEach(function (message){
                    //        messageStore.add(message);
                    //    });
                        
                    // }
                }
        });
        // {email:"bala@email.com", password : "1234", fullname : "bala"},
        // {email:"vishnu@email.com", password : "1234", fullname : "vishnu"},
        // {email:"naidu@email.com", password : "1234", fullname : "naidu"}
        request.then((e)=>{
                    let tx = e.transaction("Users", "readwrite").objectStore("Users");
                    let txm = e.transaction("Messages", "readwrite").objectStore("Messagess")
                    let txt = e.transaction("ToBox", "readwrite").objectStore("ToBox") 
                    ToData.forEach(function (message){
                        txt.add(message);
                    });
                    UsersData.forEach(function (user){
                        tx.add(user);
                    });
                    MessagesData.forEach(function (message){
                        txm.add(message);
                        console.log("mesages completed")
                    });
                })
        request.onerror= (e) => {
            console.error("db error" ,e.targer.errorCode)
        }
        request.onsuccess =(e)=>{
            let db;
            db = e.target.result;
        }
    //     request.onupgradeneeded = (e) => {
    //         db = e.target.result;
    //         if(!db.objectStoreNames.contains("Users")) {
    //         let objectStore = db.createObjectStore("Users", {keyPath: "email"})
    //         objectStore.createIndex("email","email", {unique: true});
         
    //         objectStore.transaction.oncomplete = (ev) => {
    //             console.log("transaction", ev);
    //            let userStore= db.transaction("Users", "readwrite").objectStore("Users");
    //            UsersData.forEach(function (user){
    //                userStore.add(user);
    //            });
    //         }
    //         if(!db.objectStoreNames.contains("Messages")) {
    //             let objectStore = db.createObjectStore("Messages", {keyPath: "mid"})
    //             objectStore.createIndex("fromMail","fromMail", {unique: false});
    //             objectStore.createIndex("mid","mid", {unique: true});
             
    //             objectStore.transaction.oncomplete = (ev) => {
    //                 console.log("transaction", ev);
    //                let messageStore= db.transaction("Messages", "readwrite").objectStore("Messages");
    //                MessagesData.forEach(function (message){
    //                    messageStore.add(message);
    //                    console.log("mesages completed")
    //                });
    //             }
    //         }
    //         if(!db.objectStoreNames.contains("ToBox")) {
    //             let objectStore = db.createObjectStore("ToBox", {autoIncrement:true});
    //             objectStore.createIndex("toMail","toMail", {unique: false});
    //             objectStore.createIndex("mid","mid", {unique: false});
             
    //             objectStore.transaction.oncomplete = (ev) => {
    //                 console.log("transaction", ev);
    //                let messageStore= db.transaction("ToBox", "readwrite").objectStore("ToBox");
    //                ToData.forEach(function (message){
    //                    messageStore.add(message);
    //                });
    //             }
    //         }
    //     }
    //     request.then((e)=>{
    //         let tx = e.transaction("Users", "readwrite");
    //         let store = tx.objectStore
    //     })
    //     }
    // }
}
}

function Login(){

    return (
        <div className="App-login"> 
            <button onClick={createDb}> Create DB </button>
        </div>
    );

};

export default Login;