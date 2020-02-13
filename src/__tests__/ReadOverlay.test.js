import React from 'react';
import ReadOverlay from '../ReadOverlay';
import { shallow, mount,render } from 'enzyme';

let id1 =(Math.random()*8).toString(16).replace(".","") ;
const data={ mid:id1 , date: new Date().toGMTString(), subject : "hello", body: "hi sravan from bala",fullName : "sravan", fromMail : "bala@email.com", to:["sravan@email.com","bala@email.com"],cc:[],unread:["sravan@email.com","bala@email.com"]}

test("Readoverlay component mount",()=>{
    const output = mount(<ReadOverlay type={"inbox"} handleClose={()=>{}} mailData={data} />);
})