// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react"

import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest-localstorage-mock');
React.useLayoutEffect = React.useEffect 


configure({ adapter: new Adapter() });
const localStorageMock = (function() {
    let store = {}
    return {
      getItem: function(key) {
        return store[key] || null
      },
      setItem: function(key, value) {
        store[key] = value.toString()
      },
      removeItem: function(key) {
        delete store[key]
      },
      clear: function() {
        store = {}
      },
    }
  })()
  
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  })