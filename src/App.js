import React, { Component } from 'react';
import logo from './logo.svg';
import images from "./resources/images";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={showGallary: false}
  }
  openGallary=()=>{alert("working");this.setState({showGallary:true})}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Simple Photo gallary Component in React
          </p>
          <a
            className="App-link"
            onClick={this.openGallary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Gallary
          </a>

        </header>
      </div>
    );
  }
}

export default App;
