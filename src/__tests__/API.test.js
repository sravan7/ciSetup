import {createUsers, createMessages, createToBox} from '../localStorage'; 
import {getDbData, postLogin, sendThisMail,updateReadList,deleteMails} from "../API"
beforeAll(()=>{
    createUsers();
    createMessages();
    createToBox();                
})
test(" getDbData of users",()=>{
    let actualData = window.localStorage.getItem("users");
    let dbData = JSON.stringify(getDbData("users"));
    expect(dbData).toBe(actualData);
})
test(" getDbData of messages",()=>{
    let actualData = window.localStorage.getItem("messages");
    let dbData = JSON.stringify(getDbData("messages"));
    expect(dbData).toBe(actualData);
})
let usersData ={ email:"sravan@email.com", password : "1234"};
let noUserMail = { email:"sra@email.com", password : "1234"};
let noPassword = { email:"sravan@email", password : 1234};
let successData = { isError: false, value: { email:"sravan@email.com", password : "1234", fullName : "sravan"} };
let errorData= {isError: true, value: "no user exists"}
test("succefull login postLogin check",()=>{
    let output = JSON.stringify(postLogin(usersData));
    expect(output).toBe(JSON.stringify(successData));
})
test(" no user login postLogin check",()=>{
    let output = JSON.stringify(postLogin(noUserMail));
    expect(output).toBe(JSON.stringify(errorData));
})
test(" wrong password login postLogin check",()=>{
    let output =  JSON.stringify(postLogin(noPassword));
    expect(output).toBe(JSON.stringify(errorData));
})
let mid =(Math.random()*8).toString(16).replace(".","") ;
let mailContent ={ mid:mid, date: new Date().toGMTString(), subject : "hi this is test mail", body: "hi test mail body",fullName : "tester", fromMail : "test@email.com", to: ["test1@email.com","test2@email.com"],cc: ["test3@email.com"],unread: ["test1@email.com","test2@email.com","test3@email.com"]}
test("send mail check", ()=>{
    let result = sendThisMail(mailContent);
    expect(result).toBe(true);
})

let readBy = "test3@email.com"
test("read mail check updateReadList", ()=>{
    let result = updateReadList(mid,readBy);
    expect(result).toBe(true)
})

test("delete mail check deleteMails", ()=>{
    let result = deleteMails([mid]);
    expect(result).toBe(true)
})