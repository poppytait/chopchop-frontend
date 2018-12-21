import React, { Component } from 'react';
import chopchoplogo from '../chopchoplogo.png'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container">
          <div className="h1-and-logo">
            <img src={chopchoplogo} alt='logo' className="centered" />
            <h1>Chop Chop</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;