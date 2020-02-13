import React from 'react';
import Login from '../Login';
import { shallow, mount,render } from 'enzyme';

test("login component mount",()=>{
    const output =  render(<Login handleLogin={()=>{}}/>);
//   expect(output.find("#login-password")).to.have.lengthOf(1);
//   expect(output.find("button")).to.have.lengthOf(1);
})