import React from 'react';
import Dashbaord from '../Dashboard';
import Header from "../Header";
import Menu from "../Menu";
import ExtrasSideMenu from "../ExtrasSideMenu"
import MailBox from "../MailBox"

import {createUsers, createMessages, createToBox} from '../localStorage'; 

import { shallow, mount } from 'enzyme';
beforeEach(() => {
    createUsers();
    createMessages();
    createToBox();
  });
const propData = {
    handleLogout: function(){},
    userData: { email:"sravan@email.com", password : "1234", fullName : "sravan"},

}

test(" dashboard render ", ()=>{
    const output = mount(<Dashbaord {...propData} />)
    expect(output.find(Header)).toHaveLength(1);
    expect(output.find(Menu)).toHaveLength(1);
    expect(output.find(ExtrasSideMenu)).toHaveLength(1);
    expect(output.find(MailBox)).toHaveLength(1);
})