import React, {Component} from "react";

const url = "https://api.thecatapi.com/v1/breeds?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf";
fetch(url, {
  method: "GET",
  
})
.then(resp => resp.json())
  .then(function(data) {
    // console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
export default class Vote extends Component {
    render() {
        return (
            <div style={{alignItems: "center", margin: "20%"}}>
                <button style={{backgroundColor: "lightgreen", color: "black", width: "15%", height: 40}}>Love It</button>
                <button style={{backgroundColor: "red", color: "black", width: "15%", height: 40}}>Nope It</button>
            </div>

        );
    }
}