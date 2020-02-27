import React from 'react';
import Login from '../Login';
import { shallow, mount,render } from 'enzyme';

test("login component mount",()=>{
    const output =  mount(<Login handleLogin={()=>{}}/>);
})