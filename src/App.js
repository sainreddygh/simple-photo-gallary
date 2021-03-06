import React, { Component } from 'react';
import logo from './logo.svg';
import images from "./resources/images";
import ImageSlider from "./modules/image-slider"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={showGallary: false}
  }
  openGallary=()=>{this.setState({showGallary:true})}
  closeGallary=()=>{this.setState({showGallary:false})}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Simple Photo gallary Component in React
          </p>
          <button
            style={{backgroundColor: "white", color: "black"}}
            onClick={this.openGallary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Gallary
          </button>
          {this.state.showGallary && <ImageSlider closeSlider={this.closeGallary} images={images}/>}

        </header>
      </div>
    );
  }
}

export default App;
