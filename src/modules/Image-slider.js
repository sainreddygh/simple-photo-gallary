import React from 'react';
import Images from "./images-component";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

class ImageSlider extends React.Component {
    constructor(props){
        super(props);
        this.props.images.push(this.props.images[0]);
        this.props.images.push(this.props.images[1]);
        this.state = { imageWidth: 0,
            imageHeight: 0, 
            posTop: 0, 
            posLeft:0, 
            currentImage: this.props.images.length-2, 
            transition: "0.5s",
            mouseDown: false,
            oldX:0,
            x:0
        };
    }
    rightClick=(isKeyUp)=>{// keyUp is to identofy if its from keyUp instead of swiping or mouse click
        this.setState({currentImage: this.state.currentImage+1, transition: "0.5s",mouseDown:false, oldX:0, x:0});
        if(this.state.currentImage === this.props.images.length-(isKeyUp==="keyUp" ? 1 : 2)){
            setTimeout(()=>{this.setState({currentImage: 1, transition: "0s"})}, 500)            
        }
    }    
    leftClick=(isKeyUp)=>{// keyUp is to identofy if its from keyUp instead of swiping or mouse click
        this.setState({currentImage: this.state.currentImage-1, transition: "0.5s",mouseDown:false, oldX:0, x:0});
        if(this.state.currentImage === (isKeyUp==="keyUp" ? 0 : 1)){
            setTimeout(()=>{this.setState({currentImage: this.props.images.length-2, transition: "0s"})}, 500)            
        }
    }    
    componentDidMount() {// code to get the size of the window for responsiveness
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('keyup', this.keyClick);
    }    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('keyup', this.keyClick);
    }
    //Event handling methods
    mouseDown=(e)=>{
        e.preventDefault();
        this.setState({mouseDown:true, oldX: e.nativeEvent.offsetX});
    }    
    mouseUp=()=>{
        if(this.state.x>40){
            debugger;
           this.rightClick() 
        }else if(this.state.x<-40){
            this.leftClick() 
        }else{
            this.setState({mouseDown:false, oldX:0, x:0});
        }        
    }
    keyClick=(e)=>{
        if(e.keyCode===37){
            this.leftClick("keyUp")
        }else if(e.keyCode===39){
            this.rightClick("keyUp")
        };
    }
    mouseMove=(e)=>{
        e.preventDefault();
        if(this.state.mouseDown){
            this.setState({x: (this.state.oldX-e.nativeEvent.offsetX), transition: "0.1s"});
        }
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
            zIndex: 1000
        }
        let imageContainer ={
            position: "absolute",
            top:0,
            height: this.state.imageHeight,
            display: "flex",
            left:-this.state.imageWidth*this.state.currentImage-this.state.x,
            transition: this.state.transition,
            cursor:"grab"
        }
        //this.state.mouseDown ? imageContainer.cursor="grabbing" :  imageContainer.cursor="grab";
        let leftArrow={
            position: "absolute",
            top:"45%",
            left: "3%",
            zIndex:1001
        }
        let rightArrow={
            position: "absolute",
            top:"45%",
            right: "3%",     
            zIndex:1001
        }        
        return ([
            <div key="background-div" onClick={this.props.closeSlider} style={blurBackground}></div>,//blurring the background page
            <div key="slider-div" 
                onKeyUp={this.keyClick}
                style={sliderContainer}>
                <div onClick={this.leftClick} style={leftArrow}>
                    <FaAngleLeft size={40}/>
                </div>
                <div onClick={this.rightClick} style={rightArrow}>
                    <FaAngleRight size={40}/>
                </div>
                <div onMouseMove={this.mouseMove} 
                    onMouseLeave={this.mouseUp} 
                    onMouseDown={this.mouseDown} 
                    onMouseUp={this.mouseUp}
                    style={imageContainer}>
                    <Images imgs={this.props.images} dimns={{imageWidth: this.state.imageWidth, imageHeight : this.state.imageHeight}}/>
                </div>
            </div>
        ])
    }
}

export default ImageSlider;