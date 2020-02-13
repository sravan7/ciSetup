import React from 'react';
import ReadAddress from '../ReadAddress';
import { shallow, mount,render } from 'enzyme';

test("ReadAddress component mount",()=>{

    const output = mount(<ReadAddress type="from"  mails={["sravan@email.com"]} />);
})