import React from 'react';
import MailCard from '../MailCard.js';
import { shallow, mount,render } from 'enzyme';


let id1 =(Math.random()*8).toString(16).replace(".","") ;

const data={ mid:id1 , date: new Date().toGMTString(), subject : "hello", body: "hi sravan from bala",fullName : "sravan", fromMail : "bala@email.com", to:["sravan@email.com","bala@email.com"],cc:[],unread:["sravan@email.com","bala@email.com"]}

test("MailCard component mount",()=>{
    const output =  mount(<MailCard key={id1} user={"sravan.email.com"} type={"inbox"} content={data} handleReadPopup={()=>{}} />)
})