import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Dashboard from "./Dashboard"

function App() {
  let initialData = { isLogin: false, value: "" };
  let accessToken = window.localStorage.getItem("accessToken")
  if (accessToken) {
    initialData = { isLogin: true, value: accessToken };
  }
  const [loginState, setLoginState] = useState(initialData);
  const handleLogin = (result) => {
    window.localStorage.setItem("accessToken", result.value)
    console.log(result)
    setLoginState({ isLogin: true, value: result.value })
  }
  return (
    <div className="App">
      {/* <div className="App-header"></div>  */}
      {!loginState.isLogin ?
        <Login handleLogin={handleLogin} /> :
        <Dashboard mail={loginState.value} />
      }
    </div>
  );
}

export default App;
