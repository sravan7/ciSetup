import React from 'react';
import MailAddress from '../Address';
import { shallow, mount,render } from 'enzyme';

test("Address component mount",()=>{
    const output =  mount(<MailAddress type="to" handleRemove={()=>{}} handleAccept={()=>{}} mails={[]} />);
})