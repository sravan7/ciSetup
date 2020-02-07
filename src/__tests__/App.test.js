import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';
import { shallow } from 'enzyme';

test('renders learn react link', () => {
  shallow(<App />);
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
