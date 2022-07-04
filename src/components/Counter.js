import React, { Component } from "react"; 

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: props.initialCount
        };
    }

    // state = {
    //     count: 0
    // };

    handleClicking = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleClickingdec = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {  
      return(
        <div>
            <div>Count: {this.state.count}</div>
            <button onClick={this.handleClicking}>increment</button>
            <button onClick={this.handleClickingdec}>decrement</button>
        </div>
    
  );
}}