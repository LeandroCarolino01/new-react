import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <h1>Test</h1>
        <Contacts />
      </div>
      </div>
    );
  }
}

export default App;
