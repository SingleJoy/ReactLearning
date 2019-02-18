import React, { Component } from 'react';
import Order from '../Order/Order'
import Header from '../Head/Head'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Order/>
      </div>
    );
  }
}

export default App;
