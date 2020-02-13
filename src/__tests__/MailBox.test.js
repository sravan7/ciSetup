import React from 'react';
import MailBox from '../MailBox';
import { shallow, mount,render } from 'enzyme';

test("Mailbox component mount",()=>{
  

    const output =  mount( <MailBox updateUnreadCount={()=>{}} handleReadPopup={()=>{}} type={"inbox"} user={"sravan@email.com"} />);
})