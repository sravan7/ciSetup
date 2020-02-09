
export const  initiateDB = ()=>{
    let Db = window.open("MailDB", 1);
return Db;
}

export const createUsers=() => {
    let request = initiateDB();
    request.onerror= (e) => {
        console.error("db error" ,e.targer.errorCode)
    }
    request.onsuccess =(e)=>{
        let db;
        db = e.target.result;
    }
    request.onupgradeneeded= (e) => {
        let db = e.target.result;
        if(!db.objectStoreNames.contains("Users")) {
                    let objectStore = db.createObjectStore("Users", {keyPath: "email"})
                    objectStore.createIndex("email","email", {unique: true});
                 
                    objectStore.transaction.oncomplete = (ev) => {
                        console.log("transaction", ev);
                       let userStore= db.transaction("Users", "readwrite").objectStore("Users");
                       UsersData.forEach(function (user){
                           userStore.add(user);
                       });
                    }
                }
    }
}

export const createMessages= () => {
    let request = initiateDB();
    request.onerror= (e) => {
        console.error("db error" ,e.targer.errorCode)
    }
    request.onsuccess =(e)=>{
        let db;
        db = e.target.result;
    }
    request.onupgradeneeded= (e) => {
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
                       console.log("mesages completed")
                   });
                }
            }
    }
}

export const createToBox = () => {
    let request = initiateDB();
    request.onerror= (e) => {
        console.error("db error" ,e.targer.errorCode)
    }
    request.onsuccess =(e)=>{
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
                   });
                }
            }
        }
   
}