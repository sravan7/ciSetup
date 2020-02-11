

const getDbData = (type)=> {
    const dbData = JSON.parse(window.localStorage.getItem(type));
    return dbData;
}

const verifyUserEmailAndPassword = (email, password) => {
        let dbData = getDbData("users");
        if(Object.keys(dbData).includes(email)){
            let user = dbData[email];
            if(user.password===password){
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
}

export const postLogin = (inputData)=>{
    const {email,password} = inputData;
    const outputData = {};
    if(verifyUserEmailAndPassword(email,password)){

            return {isError:false,value:email}
    }
    else {
        return {isError:true,value:"no user exists"}
    }
}
export const sortByDate = (mails)=>{
    console.log( mails.sort((a,b)=>new Date(b.date)-new Date(a.date)))
    return mails.sort((a,b)=>new Date(b.date)-new Date(a.date));
}
export const getMails=(mailType, user)=>{
    let messagesDb = getDbData("messages");
    console.log(messagesDb)
    let toMailDb = getDbData("toMails");
    let userMails=[];
    if(mailType=="inbox"){
        // let userMails=toMailDb.filter((data)=>data.toMail===user);
        for  (let message of Object.values(messagesDb)){
            console.log(message);
            if(message.to.includes(user) || message.cc.includes(user)){
                userMails.push(message)
            }
        }
       
    }
    if(mailType=="sent"){
        for  (let message of Object.values(messagesDb)){
            if(message.fromMail.includes(user)){
                userMails.push(message)
            }
        }
    }
    userMails = sortByDate(userMails);
    return userMails;
}