import React, { Component } from "react"; 

export default class Imageloder extends Component{
 
        state = {
            
            images: [
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=768:*",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-1581013857.jpg?crop=0.87845xw:1xh;center,top&resize=980:*",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-138th-annual-westminster-kennel-club-dog-show-pictured-news-photo-1581012384.jpg?crop=0.331xw:0.746xh;0.440xw,0.254xh&resize=980:*",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/american-pit-bull-terrier-walking-on-sea-shore-royalty-free-image-1581007987.jpg?crop=0.309xw:0.781xh;0.228xw,0.219xh&resize=980:*"

            ],
            idx: 0
        
        };

        handleImageChange = () => {
            this.setState({
                idx: this.state.idx + 1
            },);
        };

        handleImageChangeprev = () => {
            this.setState({
                idx: this.state.idx - 1
            },);
        };
    

    render() {  
      return(
        <div>

            <button onClick={this.handleImageChangeprev}>
                previous
            </button>
            <img src={this.state.images[this.state.idx]} style={{width: "50%", height: "25%"}}/>
            <button onClick={this.handleImageChange} style={{alignItems: "center", marginTop: "5%"}}>Next</button>
        </div>
    
  );
}}