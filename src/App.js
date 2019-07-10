// Externals
import React from 'react';

// Internals
import logo from './logo.svg';
import './App.css';
import LoginView from './views/LoginView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginView/>
      </header>
    </div>
  );
}

export default App;
