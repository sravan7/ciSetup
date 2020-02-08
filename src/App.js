import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
     {/* <div className="App-header"></div>  */}
     {!window.localStorage.getItem("acessToken")?
      <Login /> : 
     <div className="App-dashboard"> </div>
     }
</div> 
  );
}

export default App;
