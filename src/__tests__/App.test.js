import React from 'react';
import App from '../App.js';
import Login from '../Login';
import { shallow, mount, render } from 'enzyme';

const email = "sravan@email.com";
const password = "1234"
test('login view ', () => {
  const  output =  shallow(<App />);
  expect(output.find(Login)).toHaveLength(1);
});
// test('snapshot test', () => {
//   const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot();
// });
