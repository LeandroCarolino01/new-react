import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  state = {
    title: 'My App'
  }
  render() {
    return (
      <div className="App">
      <div className="container">
        <h1>{this.state.title}</h1>
        <Contacts />
      </div>
      </div>
    );
  }
}

export default App;
