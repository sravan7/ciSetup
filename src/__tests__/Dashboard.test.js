import React from 'react';
import Dashbaord from '../Dashboard';
import { shallow, mount } from 'enzyme';
const propData = {
    handleLogout: function(){},
    userData: { email:"sravan@email.com", password : "1234", fullName : "sravan"},

}
test.skip(" dashboard render ", ()=>{
    const output = mount(<Dashbaord {...propData} />)
    console.log(output)
    output.find(".app-bar").to.have.lengthOf(1)
})