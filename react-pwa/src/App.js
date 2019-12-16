import React from 'react';
import Button from '@material-ui/core/Button'
import logo from './xandr-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body" alt="buttonGroup">
        <Button
          className="App-button"
          variant="contained"
          color="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </Button>
        <Button
          className="App-button"
          variant="contained"
          color="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </Button>
        <Button
          className="App-button"
          variant="contained"
          color="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default App;
