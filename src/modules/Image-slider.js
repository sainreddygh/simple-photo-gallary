import React, { Component } from 'react';

class ImageSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = { imageWidth: 0,
            imageHeight: 0, 
            posTop: 0, 
            posLeft:0, 
            transition: "0.5s"
        };
    }  
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('keyup', this.keyClick);
    }    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('keyup');
    }  
    updateWindowDimensions=()=> {
        console.log(window.innerWidth);
        if(window.innerWidth<1000){            
            this.setState({ imageWidth: window.innerWidth,
                imageHeight: window.innerWidth*0.8,
                posTop: 0,
                posLeft: 0
              })
        }else{
            this.setState({ imageWidth: window.innerWidth*0.7,
                imageHeight: window.innerWidth*(0.7*0.6),
                posTop: window.innerWidth*0.02,
                posLeft: window.innerWidth*0.15
            })
        }
    }
    render(){
        let blurBackground={
            position: "fixed",
            display: "block",
            background: "black",
            opacity: 0.5,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
        }
        let sliderContainer={
            position: "fixed",
            top: this.state.posTop,
            left: this.state.posLeft,
            width: this.state.imageWidth,
            margin: "auto",
            height: this.state.imageHeight,
            overflowX: "hidden",
            display: "flex",
            border: "white solid 2px",
            zIndex: 1000
        }
        let imageContainer ={
            position: "absolute",
            top:0,
            height: this.state.imageHeight,
            display: "flex",
            left:-this.state.imageWidth*0,
            transition: this.state.transition,
            cursor:"grab"
        } 
        return ([
            <div key="background-div" style={blurBackground}></div>,
            <div key="slider-div"
                style={sliderContainer}>
                <div style={imageContainer}>
                </div>
            </div>
        ])
    }
}

export default ImageSlider;