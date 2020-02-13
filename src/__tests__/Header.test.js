import React from 'react';
import Header from '../Header';
import { shallow, mount,render } from 'enzyme';

test("header component mount",()=>{
    const output =  shallow(<Header handleLogout={()=>{}} unreadCount={0} />);
})