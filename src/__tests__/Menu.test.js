import React from 'react';
import Menu from '../Login';
import { shallow, mount,render } from 'enzyme';

test("Menu component mount",()=>{
    const output =  mount(<Menu handleCompose={()=>{}} mailboxType={"inbox"} handleMailboxType={()=>{}} inboxCount={0} outboxCount={0}/>);
})