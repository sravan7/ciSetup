

export const getDbData = (type) => {
    const dbData = JSON.parse(window.localStorage.getItem(type));
    return dbData;
}
export const writeToDb = (type, data) => {
    window.localStorage.setItem(type, JSON.stringify(data))
    return true;
}

const verifyUserEmailAndPassword = (email, password) => {
    let dbData = getDbData("users");
    if (Object.keys(dbData).includes(email)) {
        let user = dbData[email];
        if (user.password === password) {
            return user;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

export const postLogin = (inputData) => {
    const { email, password } = inputData;
    const outputData = verifyUserEmailAndPassword(email, password);
    if (outputData) {

        return { isError: false, value: outputData }
    }
    else {
        return { isError: true, value: "no user exists" }
    }
}
export const sortByDate = (mails) => {
    return mails.sort((a, b) => new Date(b.date) - new Date(a.date));
}
export const getMails = (mailType, user) => {
    let messagesDb = getDbData("messages");
    let userMails = [];
    if (mailType === "inbox") {
        // let userMails=toMailDb.filter((data)=>data.toMail===user);
        for (let message of Object.values(messagesDb)) {
            if (message.to.includes(user) || message.cc.includes(user)) {
                userMails.push(message)
            }
        }

    }
    if (mailType === "sent") {
        for (let message of Object.values(messagesDb)) {
            if (message.fromMail === user) {
                userMails.push(message)
            }
        }
    }
    userMails = sortByDate(userMails);
    return userMails;
}
export const sendThisMail = (content) => {
    let db = getDbData("messages");
    db[content["mid"]] = content;
    writeToDb("messages", db);
    return true;
}
export const updateReadList = (mid, readBy) => {
    let db = getDbData("messages")
    let unread = db[mid].unread;
    unread = unread.filter(val => val !== readBy);
    db[mid].unread = unread;
    writeToDb("messages", db);
    if (unread.length === 0) return false;    
    return true;
}
export const deleteMails = (deleteIds) => {
    let db = getDbData("messages")
    try {
        for (let id of deleteIds) {
            delete db[id]
        }
        writeToDb("messages", db);
        return true;
    }
    catch{
        return false;
    }
}