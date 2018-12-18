import React from "react";

export default class Images extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){        
        let imageDivStyle={
            position: "relative",
            width: this.props.dimns.imageWidth,
            maxHeight: this.props.dimns.imageHeight
        }
        let captionDiv ={
            position: "absolute",
            top: "3%",
            left: 0,
            width: "100%",     
            fontSize: "30px",
            textAlign: "center"
        }
        let captionP ={
            display: "inline",
            backgroundColor: "white",
            color: "black"
        }
        let imageStyle={
            width: this.props.dimns.imageWidth,
            height: this.props.dimns.imageHeight,
            border:"2px solid black",
            display: "block"
        }
        let imgs = this.props.imgs.map((i,index)=>{
            return (
                <div key={"key"+index} style={imageDivStyle}>
                    
                        <p style={captionP}>                        
                            {i.caption}
                        </p>
                    <img alt="" style={imageStyle} src={i.url}></img>
                </div>
            )
        })
        return (imgs);
    }
}