import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

const email = "sravan@email.com";
const password = "1234"
test('login view ', () => {
  const output = mount(<App />);
  output.find(".login-email").value=email;
  output.find(".login-password").value=password;
  output.find("button").simulate("click")
});
// test('snapshot test', () => {
//   const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot();
// });
