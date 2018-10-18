import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <h1>My App</h1>
        <Contact name="Leandro" email="leandro@gmail.com"/>
      </div>
      </div>
    );
  }
}

export default App;
