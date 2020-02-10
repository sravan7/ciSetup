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
];

export const  initiateDB = (ver)=>{
    let Db = window.indexedDB.open("MailDB", ver);
return Db;
}

export const createUsers=() => {
    console.log("called sokwhat")
    let request = initiateDB(1);
    request.onerror= (e) => {
        console.error("db error" ,e)
    }
    request.onsuccess =(e)=>{
        let db;
        db = e.target.result;
    }
    request.onupgradeneeded= (e) => {
        console.log(e, "users")
        let db = request.result;
        if(!db.objectStoreNames.contains("Users")) {
                    if(e.oldVersion<1){
                    let objectStore = db.createObjectStore("Users", {keyPath: "email"})
                    objectStore.createIndex("email","email", {unique: true});
                 
                    objectStore.transaction.oncomplete = (ev) => {
                        console.log("transaction", ev);
                       let userStore= db.transaction("Users", "readwrite").objectStore("Users");
                       UsersData.forEach(function (user){
                           userStore.add(user);
                           console.log(user);
                       });
                    }
                }
            }
    }
        let secondStore = initiateDB(2);
            secondStore.onsuccess =(e)=> {
                console.log(e, "secondStorse")
            }
            secondStore.onupgradeneeded = (e) => {
                console.log(e, "upfgrade neded")
            }
           
    
}

export const createMessages= () => {
    let request = initiateDB(2);
    console.log(request, "message");
    request.onerror= (e) => {
        console.error("db error" ,e)
    }
    request.onsuccess =(e)=>{
        console.log(e,"message");
        let db;
        db = e.target.result;
        console.log("yes called")
    }
    request.onupgradeneeded= (e) => {
        console.log("no call")
        let db = e.target.result;
            if(!db.objectStoreNames.contains("Messages")) {
                let objectStore = db.createObjectStore("Messages", {keyPath: "mid"})
                objectStore.createIndex("fromMail","fromMail", {unique: false});
                objectStore.createIndex("mid","mid", {unique: true});
             
                objectStore.transaction.oncomplete = (ev) => {
                    console.log("transaction", ev);
                   let messageStore= db.transaction("Messages", "readwrite").objectStore("Messages");
                   MessagesData.forEach(function (message){
                       messageStore.add(message);
                       console.log("mesages completed", message)
                   });
                }
            }
    }
}

export const createToBox = () => {
    let request = initiateDB(3);
    console.log(request, "tobox")
    request.onerror= (e) => {
        console.error("db error" ,e)
    }
    request.onsuccess =(e)=>{
        console.log("success", e)
        let db;
        db = e.target.result;
    }
    request.onupgradeneeded= (e) => {
        let db = e.target.result;
            if(!db.objectStoreNames.contains("ToBox")) {
                let objectStore = db.createObjectStore("ToBox", {autoIncrement:true});
                objectStore.createIndex("toMail","toMail", {unique: false});
                objectStore.createIndex("mid","mid", {unique: false});
             
                objectStore.transaction.oncomplete = (ev) => {
                    console.log("transaction", ev);
                   let messageStore= db.transaction("ToBox", "readwrite").objectStore("ToBox");
                   ToData.forEach(function (message){
                       messageStore.add(message);
                       console.log(message);
                   });
                }
            }
        }
   
}