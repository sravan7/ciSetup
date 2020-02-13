import React from 'react';
import Overlay from '../Overlay';
import { shallow, mount,render } from 'enzyme';

test.skip("Overlay component mount",()=>{
    const output =  mount(<Overlay type={"compose"} handleClose={()=>{}} fullName={"sravan"} user={"sravan@email.com"} />);
})